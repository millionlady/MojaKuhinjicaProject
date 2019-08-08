import React from 'react';
import '../styles/Nav.scss';
import ButtonAction from '../../common/components/ButtonAction';
import ProfilePic from '../assets/profilePic.svg';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { history } from '../../App';

class Nav extends React.Component {


    render() {
        return (
            <div className="nav">
                <img src={Logo} className="nav__logo" />
                <Link to="/upload">
                    <ButtonAction className="nav__button" ></ButtonAction>
                </Link>
                <img src={ProfilePic} className="nav__picture" />
            </div>

        )
    }
}

export default Nav;