import React from 'react';
import TagDisable from '../../common/components/TagDisable';
import '../styles/RecipePhoto.scss';

import Heart from '../../_home/assets/heart-outlined.svg';
import Time from '../../_recipe/assets/clock.svg';
import Person from '../../_recipe/assets/user.svg';

class RecipePhoto extends React.Component {

    renderTag = () => {
        const { tags } = this.props;

        return tags.map((el) => <TagDisable name={el.name}></TagDisable>)
    }

    render() {

        const { title, likes, time, people } = this.props;
        return (
            <div className="recipePhoto">
                <div className="recipePhoto__photo"></div>
                <div className="recipePhoto__tag">
                    {this.renderTag()}
                </div>

                <h1 className="recipePhoto__title">{title}</h1>

                <div className="icons">
                    <div className="icons__heart">
                        <img src={Heart} className="icons__heart__icon"></img>
                        <h3>{likes}</h3>
                    </div>
                    <div className="icons__time">
                        <img src={Time} className="icons__time__icon"></img>
                        <h3>{time}</h3>
                    </div>
                    <div className="icons__person">
                        <img src={Person} className="icons__time__icon"></img>
                        <h3>{people}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipePhoto;