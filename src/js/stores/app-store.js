import { /*dispatch,*/ register } from '../dispatchers/dispatcher';
import AppConstants from '../constants/constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _lanas = [];

for(let i = 1; i < 6; i++) {
    _lanas.push({
       id: 'Comp' + i,
       title: `Comp ${i}`,
       size: i,
       'type': 'component'
   });
}

var _lanaCart = [];

const _removeLana = (lana) => {
    _lanaCart.splice(_lanaCart.findIndex(i => i === lana), 1);
};

const _findLana = (lana) => {
    return _lanas.findIndex(_lana => _lana.id === lana.id);
};

const _addLana = (lana) => {
    const _lana = _findLana(lana);
    if(!_lana) {
        _lanaCart.push(Object.assign({size: 1}, lana));
    }
};

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
    dispatcherIndex: register(function(action) {
        switch(action.actionType) {
            case AppConstants.ADD_LANA:
                _addLana(action.lana);
                break;
            case AppConstants.REMOVE_LANA:
                _removeLana(action.lana);
                break;
            default: break;
        }

        AppStore.emitChange();
    })
});

export default AppStore;