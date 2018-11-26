import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <p> Header component </p>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;