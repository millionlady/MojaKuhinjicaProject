import React from 'react';
import Main from '../_recipe/components/RecipeMain';
import Side from '../_recipe/components/RecipeSide';

import RecipeFull from './constants/recipe-full';

import { connect } from 'react-redux';
import { getRecipeSuccess } from '../_recipe/actions/recipe-actions';

class Recipe extends React.Component {
    componentDidMount() {
        const { setRecipesData } = this.props;

        setRecipesData(RecipeFull);
    }
    render() {

        const { displayRecipe } = this.props;

        return (
            <div style={{ display: 'flex' }}>
                <Main recipeDataMain={displayRecipe}></Main>
                <Side recipeDataSide={displayRecipe}></Side>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ displayRecipe: state.recipeReducer.recipeDataMain })
const mapDispatchToProps = (dispatch) => ({ setRecipesData: (data) => dispatch(getRecipeSuccess(data)) })

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);