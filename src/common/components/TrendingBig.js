import React from 'react';
import '../styles/TrendingBig.scss';
import TagDisable from './TagDisable';

import Heart from '../../_home/assets/heart-outlined.svg';
import Food from '../../_home/assets/Food.jpg';

class TrendingBig extends React.Component {

    render() {
        const { title, likes } = this.props;

        return (
            <div>
                <div className="trending__left__picture"></div>
                <div>
                    <div className="trending__left__tag">
                        <TagDisable></TagDisable>
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