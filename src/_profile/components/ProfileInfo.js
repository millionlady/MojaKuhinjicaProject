import React from 'react';

import '../styles/ProfileInfo.scss';
import Avatar from '../assets/avatar.svg';

class ProfileInfo extends React.Component {


    render() {
        return (
            <div>
                <div className="info">
                <img src={Avatar} className="info__avatar"></img>
                <h1  className="info__name">Ivana Ivanovic</h1>
                <h3  className="info__email">ivana.ivanovic@gmail.com</h3>
                <button className="info__button"><h3>Uredi</h3></button>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;