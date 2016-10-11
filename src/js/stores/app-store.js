import { register } from '../dispatchers/dispatcher';
import AppConstants from '../constants/constants';
import { EventEmitter } from 'events';
import LanaAPI from '../api/LanaAPI';

const CHANGE_EVENT = 'change';

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
    store: {
        lanas:LanaAPI.getLanas(),
        isShowingModal: false
    },
    dispatcherIndex: register(function(action) {
        switch(action.actionType) {
            case AppConstants.ADD_LANA: {
                LanaAPI.addLana(action.lana);
                break;
            }

            case AppConstants.REMOVE_LANA: {
                LanaAPI.removeLana(action.lana);
                break;
            }

            case AppConstants.SHOW_MODAL: {
                AppStore.store.isShowingModal = true;
                break;
            }
            case AppConstants.HIDE_MODAL: {
                AppStore.store.isShowingModal = false;
                break;
            }

            default: break;
        }

        AppStore.emitChange();
    })
});

export default AppStore;
