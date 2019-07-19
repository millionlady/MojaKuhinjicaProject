import React from 'react';
import '../styles/CardRecipe.scss'
import TagDisable from './TagDisable';
import Heart from '../../_home/assets/heart-outlined.svg';

class CardRecipe extends React.Component {


    render() {

        const { title, likes } = this.props;
        return (
            <div className="card">
                <div className="card__picture"></div>
                <div className="card__text">
                    <TagDisable></TagDisable>
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