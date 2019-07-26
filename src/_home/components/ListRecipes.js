import React from 'react';
import '../styles/ListRecipes.scss';
import CardRecipe from '../../common/components/CardRecipe';

class ListRecipes extends React.Component {
    renderRecipes = () => {
        const { recipes } = this.props;

        return recipes.map((el) => {
            return <CardRecipe title={el.title} likes={el.likes} tags={el.tags} />;
        })
    }

    render() {
        return (
            <div className="list">
                {this.renderRecipes()}
            </div>
        )
    }
}

export default ListRecipes;