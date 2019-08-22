import React from 'react';
import {Link } from 'react-router-dom'
import Nav from '../components/Nav'
const Header = () => (
  <div className="Header">
    <div className="Header-container">
      <div className="Header-content">
        <div className="Header-logo">
          <Link to={"/"}>
            <img src="" alt="imagenlogo "></img>
          </Link>
          <h1>patitas</h1>
        </div>
        <div className="Header-nav">
          <Nav/>
        </div>
      </div>
    </div>
  </div>

);

export default Header;
