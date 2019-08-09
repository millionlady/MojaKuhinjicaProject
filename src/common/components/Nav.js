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
                <Link className="nav__logo" to="/">
                    <div > <img src={Logo} /></div>
                </Link>

                <Link to="/upload">
                    <ButtonAction className="nav__button" ></ButtonAction>
                </Link>

                <Link to="/profile">
                    <img src={ProfilePic} className="nav__picture" />
                </Link>
            </div>

        )
    }
}

export default Nav;