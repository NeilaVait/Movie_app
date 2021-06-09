import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return <footer className="text-center">All rights reserved &copy; {new Date().toLocaleDateString()} </footer>;
  }
}

export default Footer;
