import actionTypes from '../constants/action-types';

const initialState = {
    recipeDataMain: {
        id: 0,
        title: '',
        tags: [],
        likes: 0,
        time: '',
        people: '',
        author: '',
        description: '',
        prep: [],
        ingredients: []
    },
};

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.GET_RECIPE_SUCCESS:
            return {
                ...state,
                recipeDataMain: action.data
            }
        default:
            return state;
    }

}