import React from 'react';
import TagDisable from '../../common/components/TagDisable';
import '../styles/RecipePhoto.scss';

import Heart from '../../_home/assets/heart-outlined.svg';
import Time from '../../_recipe/assets/clock.svg';
import Person from '../../_recipe/assets/user.svg';

class RecipePhoto extends React.Component {


    render() {
        return (
            <div className="recipePhoto">
                <div className="recipePhoto__photo"></div>
                <div className="recipePhoto__tag">
                    <TagDisable></TagDisable>
                </div>

                <h1 className="recipePhoto__title">Bla ahahjhsjd jeheua</h1>

                <div className="icons">
                    <div className="icons__heart">
                        <img src={Heart} className="icons__heart__icon"></img>
                        <h3>121</h3>
                    </div>
                    <div className="icons__time">
                        <img src={Time} className="icons__time__icon"></img>
                        <h3>1212</h3>
                    </div>
                    <div className="icons__person">
                        <img src={Person} className="icons__time__icon"></img>
                        <h3>211</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipePhoto;