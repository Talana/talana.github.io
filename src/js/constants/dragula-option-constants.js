import Dragula from '../../lib/Dragula';
import AppActions from '../actions/actions';
import LanaAPI from '../api/LanaAPI';
import Lana from '../models/Lana';

let options = {
    copy: function(el, source) {
        if (el.classList.contains("allow_copy")) {
            return true;
        }
    },
    moves: function(el, container, handle) {
        return el.classList.contains('draggableContent') || el.classList.contains('draggable');
    },
    accepts: function(el, target, source, sibling) {

        return (target.classList.contains("draggableContent")
            && target !== document.getElementById('sidebarDraggableArea'));
    },
    direction: 'vertical',
    removeOnSpill: true
}

const DragulaConst = Dragula(options);

const _updateClass = (forElement, forType) => {

    // Remove allow_copy of element
    forElement.className = forElement.className.replace('allow_copy','');

    // if a component, shrink the size
    if(forType === 'component') {
        forElement.className = forElement.className.replace('col-xs-12','col-xs-2');
    } else {
        // is `data-type === `row``: add 'draggableContent' to class if it doesnt already
        if (!forElement.className.includes('draggableContent')) {
            forElement.className += ' draggableContent';
        }

        //TODO: Change col count to have row and column on same row
    }

    // Add 'dropped' class if it doesnt already
    if (!forElement.className.includes('dropped')) {
        forElement.className += ' dropped';
    }

    return forElement;
}
const helperMethods = (element) => {
    return {
        attribute: (attribute) => {
            return element.getAttribute(attribute);
        },
        updateClass:(type) => {
            return _updateClass(element, type);
        },
        dataId: element.getAttribute('data-id'),
        dataType: element.getAttribute('data-type'),
    }
}
DragulaConst
.on('drop', (el, target, source, sibiling) => {
    if(target !== document.getElementById('sidebarDraggableArea')) {
        Object.assign(el, helperMethods(el));
        Object.assign(target, helperMethods(target));

        let elementType = el.dataType,
            createdLana = Lana(elementType);

        el.setAttribute('data-id', 0)
        // See if target is the canvas or an existing Lana
        if(target.className.includes('canvasArea')) {
            // if it's the canvas, then:
            AppActions.addLana(createdLana);
        } else {
            if(el.dataId === target.dataId) {
                console.log('dropping lana into background canvas');
                return
            }
            // if it's an exisiting Lana, then:
            /// find existing lana in Store
            let foundLana = LanaAPI.findLanaWithId(target.dataId);
            console.log(`foundLana = ${foundLana}`);
            foundLana.addChild(createdLana)

        }

        // Remove <p> tag of element to make it look cleaner
        // Make sure the element is not `draggableContent` aka `Row`
        while (el.hasChildNodes() && !el.className.includes('draggableContent')) {
            el.removeChild(el.lastChild);
        }

        // Possible move all this "Class renaming" to a separate function

        el = el.updateClass(elementType);

        if(elementType === 'row') {
            DragulaConst.containers.push(el);
        }

        console.log(LanaAPI.lanas);
    }
});
export default DragulaConst;
