import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Cafe from './components/Cafe/Cafe';
import AddCafe from './components/AddCafe/AddCafe';
import Layout from './hoc/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    console.log('app started');
    return (
      <div className="App">
          <Layout>
               <Route exact component = {AddCafe} path = "/cafes/add_cafe"/>
               <Route component = {Cafe} path = "/cafes"/>
          </Layout>
       
      </div>
    );
  }
}

export default App;
