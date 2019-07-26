import React from 'react';
import '../styles/Description.scss';
import Avatar from '../../_profile/assets/avatar.svg';

class Description extends React.Component {

    render() {
        const { author, desc } = this.props;

        return (

            <div className="desc">
                <div className="desc__info">

                    <img src={Avatar} className="desc__info__photo" />
                    <h3 className="desc__info__name">{author}</h3>

                </div>

                <div className="desc__text">
                    <h3>{desc}</h3>
                </div>
                <h1 className="desc__prep">Priprema</h1>
            </div>
        )
    }
}

export default Description;