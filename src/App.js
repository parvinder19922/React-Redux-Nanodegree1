import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import HomeComponent from './components/Home'
import CategoryComponent from './components/category'
import CreatePostForm from './components/CreatePostForm'



class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path='/' component={HomeComponent}/>
       <Route path='/:category/posts' component={CategoryComponent} />
        <Route path='/create-post' component={CreatePostForm} />
      </div>
    );
  }
}

export default App;
