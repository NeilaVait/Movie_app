import React, { Component } from 'react';
//import style
import './style.css';
//add image
import heroImg from './hero.jpg';

class AppHeader extends Component {
  state = {};

  getDate() {
    const now = new Date();
    return now.toLocaleString();
  }

  render() {
    return (
      <header>
        <img className="hero" src={heroImg} alt="hero" />
        {/* gauti siandienos data */}
        <p className="hero-date">{this.getDate()}</p>
      </header>
    );
  }
}

export default AppHeader;
