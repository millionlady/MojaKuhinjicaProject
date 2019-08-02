import { combineReducers } from 'redux';

import HomeReducer from './_home/reducer/home-reducer';
import ProfileReducer from './_profile/reducer/profile-reducer';
import RecipeReducer from './_recipe/reducer/recipe-reducer';

export default combineReducers({
    homeReducer: HomeReducer,
    profileReducer: ProfileReducer,
    recipeReducer: RecipeReducer,
});