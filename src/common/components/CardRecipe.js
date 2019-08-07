import React from 'react';
import '../styles/CardRecipe.scss';
import TagDisable from './TagDisable';
import Heart from '../../_home/assets/heart-outlined.svg';
import FoodPic from '../assets/food.jpg';

class CardRecipe extends React.Component {

    renderTag = () => {
        const { tags } = this.props;

        return tags.map((el) => <TagDisable name={el.name}></TagDisable>)
    }

    render() {

        const { title, likes } = this.props;

        return (
            <div className="card">
                <div><img src={FoodPic} className="card__picture"></img></div>
                <div className="card__text">
                    {this.renderTag()}
                    <h3 className="card__text__title">{title}</h3>
                    <div className="likes">
                        <img src={Heart} className="likes__icon"></img>
                        <h3>{likes}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardRecipe;