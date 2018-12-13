import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <ul className = "Navigation__ul">
              <li className = "Navigation__li">
                <Link to = '/cafes/add_cafe'>Add Cafe</Link>
              </li>
              <li className = "Navigation__li">
                <Link to = '/about'>About</Link>
              </li>
            
            </ul>
        );
    }
}

export default Navigation;