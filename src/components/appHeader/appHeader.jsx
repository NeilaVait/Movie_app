import React, { Component } from 'react';
//import style
import './style.css';
//add image
import heroImg from './hero.jpg';

class AppHeader extends Component {
  state = {};
  render() {
    return (
      <header>
        <img className="hero" src={heroImg} alt="hero" />
      </header>
    );
  }
}

export default AppHeader;
