import actionTypes from '../constants/action-types';

const initialState = {
    recipes: [],
    item: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.GET_MYPOSTS_SUCCESS:
            return {
                ...state,
                recipes: action.data
            }
        default:
            return state;
    }

}