import React from 'react';
import { Link } from 'react-router-dom';

const BCLogo = () => (
  <Link className="navbar-brand" to="/bc">
    <div className="side-nav-item">
      <div className="logo-container">
        <img src="../../assets/bc_small_1.png" alt="Burn Cartel" />
      </div>
    </div>
  </Link>
);

export default BCLogo;
