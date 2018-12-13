import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import './Header.css';
import Logo from '../ui/Logo/Logo';

class Header extends Component {
    render() {
        return (
            <div className = "header__container">
                <Logo/>
                <Navigation/>
            </div>
        );
    }
}

export default Header;