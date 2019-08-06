import React from 'react';
import '../styles/Nav.scss';
import ButtonAction from '../../common/components/ButtonAction';
import ProfilePic from '../assets/profilePic.svg';
import Logo from '../assets/logo.svg';

class Nav extends React.Component {


    render() {

        return (
            <div className="nav">
                <img src={Logo} className="nav__logo" />
                <ButtonAction className="nav__button"></ButtonAction>
                <img src={ProfilePic} className="nav__picture" />
            </div>

        )
    }
}

export default Nav;