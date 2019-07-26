import React from 'react';
import Main from '../_recipe/components/RecipeMain';
import Side from '../_recipe/components/RecipeSide';

import RecipeFull from './constants/recipe-full';


class Recipe extends React.Component {

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <Main recipeDataMain={RecipeFull}></Main>
                <Side recipeDataSide={RecipeFull}></Side>
            </div>
        )
    }
}

export default Recipe;