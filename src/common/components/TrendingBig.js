import React from 'react';
import '../styles/TrendingBig.scss';
import TagDisable from './TagDisable';
import Food from '../assets/food.jpg';

import Heart from '../../_home/assets/heart-outlined.svg';

class TrendingBig extends React.Component {

    renderTag = () => {
        const { tags } = this.props;

        return tags.map((el) => <TagDisable name={el.name}></TagDisable>)
    }

    render() {
        const { title, likes } = this.props;

        return (
            <div className="trending__left">
                <div><img src={Food} className="trending__left__picture"></img></div>
                <div>
                    <div className="trending__left__tag">
                        {this.renderTag()}
                    </div>

                    <h1 className="trending__left__title">{title}</h1>

                    <div className="heart">
                        <img src={Heart} className="heart__icon"></img>
                        <h3>{likes}</h3>
                    </div>

                </div>
            </div>
        )
    }
}

export default TrendingBig;