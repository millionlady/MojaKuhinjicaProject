import React from 'react';
import Main from '../_recipe/components/RecipeMain';
import Side from '../_recipe/components/RecipeSide';


class Recipe extends React.Component {


    render() {
        return (
            <div style={{ display: 'flex' }}>
                <Main></Main>
                <Side></Side>
            </div>
        )
    }
}

export default Recipe;