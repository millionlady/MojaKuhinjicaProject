import React from 'react';
import '../styles/RecipeSide.scss';


class RecipeSide extends React.Component {

    renderIngredients = () => {

        const { recipeDataSide } = this.props;

        return recipeDataSide.ingredients.map(ingredient => <div className="recipeSide__text"><h3>{ingredient.name}</h3></div>);

    }

    render() {
        const { text } = this.props;

        return (
            <div className="recipeSide">
                <h1 className="recipeSide__title">Sastojci</h1>
                {this.renderIngredients()}
            </div>
        )
    }
}

export default RecipeSide;