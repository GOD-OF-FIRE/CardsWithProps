import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card ques="What is your Name ?" ans=" My Name is Kushagra "/>
        <Card ques="What is your Age ?" ans= "My age is 22"/>
        <Card ques="Where you Live ?" ans="I live in Prayagraj"/>
        <Card ques="Where do you Study" ans="I study at SRM IST"/>

      </div>
    );
  }
}

export default App;
