import { register } from '../dispatchers/dispatcher';
import AppConstants from '../constants/constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _lanas = [];

for(let i = 1; 1 < 6; i++) {
    _lanas.push({
       'id': 'Comp' + 1,
       'title': `Comp ${i}`,
       'size': i,
       'type': 'component'
   });
}

var _lanaCart = [];

const _removeLana = (lana) => {
    _lanaCart.splice(_lanaCart.findIndex(i => i === lana), 1);
};

const _findLana = (lana) => {
    return _lanaCart.findIndex(_lana => _lana.id === lana.id);
};

const _increaseLanaSize = (lana) => lana.size++;

const _decreaseLanaSize = (lana) => {
    lana.size--;
    if(lana.size === 0) {
        _removeLana(lana);
    }
};

const _addLana = (lana) => {
    const _lana = _findLana(lana);
    if(!_lana) {
        _lanaCart.push(Object.assign({size: 1}, lana));
    } else {
        _increaseLanaSize(_lana);
    }
};

const _lanaTotals = (qty = 0, total = 0) => {
    _lanaCart.forEach(lana => {
        qty += lana.size
        total += 1
    });
    return {qty, total};
}

const AppStore = Object.assign(EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    getLanaCart() {
        return _lanaCart;
    },
    getLanas() {
        return _lanas.map( lana => {
            return Object.assign({}, lana, _lanaCart.find(cLana => cLana.id === lana.id))
        })
    },
    getLanaTotals() {
        return _lanaTotals();
    },
    dispatcherIndex: register(function(action) {
        switch(action.actionType) {
            case AppConstants.ADD_LANA:
                _addLana(action.item);
                break;
            case AppConstants.REMOVE_LANA:
                _removeLana(action.item);
                break;
            case AppConstants.INCREASE_LANA_SIZE:
                _increaseLanaSize(action.item);
                break;
            case AppConstants.DECREASE_LANA_SIZE:
                _decreaseLanaSize(action.item);
                break;
            default: break;
        }

        AppStore.emitChange();
    })
});

export default AppStore;