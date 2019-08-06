import React from 'react';
import '../styles/TrendingSmall.scss';
import TagDisable from './TagDisable';

import Heart from '../../_home/assets/heart-outlined.svg';
import Food from '../../_home/assets/Food.jpg';

class TrendingSmall extends React.Component {

    renderTag = () => {

        const { tags } = this.props;

        return tags.map((el) => <TagDisable name={el.name}></TagDisable>);

    }

    render() {
        const { title, likes } = this.props;

        return (
            <div className="trendingSmall">
                <img src={Food} className="trendingSmall__picture" />
                <div className="trendingSmall__text">
                    {this.renderTag()}
                    <h3 className="trendingSmall__text__title">{title}</h3>
                    <div className="likes">
                        <img src={Heart} className="likes__icon"></img>
                        <h3>{likes}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrendingSmall;