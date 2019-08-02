import actionTypes from '../constants/action-types';

export const getRecipesListSuccess = (data) => {
    return {
        type: actionTypes.GET_RECIPELIST_SUCCESS,
        data
    }

}