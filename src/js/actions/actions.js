import AppConstants from '../constants/constants';
import { dispatch } from '../dispatchers/dispatcher';

export default {

    addLana(lana) {
        dispatch({
            actionType: AppConstants.ADD_LANA, lana
        });
    },

    removeLana(lana) {
        dispatch({
            actionType: AppConstants.REMOVE_LANA, lana
        });
    }
}
