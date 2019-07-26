import React from 'react';
import RecipePhoto from '../../common/components/RecipePhoto';
import Prep from '../components/Prep.js';
import Description from './Description';

import '../styles/RecipeMain.scss';

class RecipeMain extends React.Component {

    renderDesc = () => {

        const { recipeDataMain } = this.props;

        return <Description author={recipeDataMain.author} desc={recipeDataMain.description}></Description>

    }

    renderPhoto = () => {

        const { recipeDataMain } = this.props;

        return <RecipePhoto title={recipeDataMain.title} likes={recipeDataMain.likes} time={recipeDataMain.time} people={recipeDataMain.people} tags={recipeDataMain.tags}></RecipePhoto>

    }

    renderPrep = () => {

        const { recipeDataMain } = this.props;

        return recipeDataMain.prep.map((el) => <Prep step={el.id} preparation={el.text}></Prep>);
    }

    render() {
        return (
            <div className="recipeMain">
                {this.renderPhoto()}
                {this.renderDesc()}
                {this.renderPrep()}
            </div>
        )
    }
}

export default RecipeMain;