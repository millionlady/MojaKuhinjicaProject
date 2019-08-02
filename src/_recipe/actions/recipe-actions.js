import actionTypes from '../constants/action-types';

export const getRecipeSuccess = (data) => {
    return {
        type: actionTypes.GET_RECIPE_SUCCESS,
        data
    }

}

