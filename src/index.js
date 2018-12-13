import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {firebase} from './firebase';
import App from './App';


import { BrowserRouter } from 'react-router-dom';


firebase.auth().onAuthStateChanged( (user)=> {
    ReactDOM.render(
        <BrowserRouter>
              <App user = {user} />
        </BrowserRouter>
     
    , document.getElementById('root'));
} )


