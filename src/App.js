import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import HomeComponent from './components/Home'
import CategoryComponent from './components/category'



class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path='/' component={HomeComponent}/>
       <Route path='/:category/posts' component={CategoryComponent} />
      </div>
    );
  }
}

export default App;
