import Dragula from '../../lib/Dragula';

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

export default DragulaConst;
