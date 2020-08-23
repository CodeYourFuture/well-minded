import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
const Header = () => {
  return (
    <nav>
      <img className="logo" src={logo} />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/About">About us</Link>
        </li>
        <li>
          <Link to="/Organisations">Organisations</Link>
        </li>
        <li>
          <Link to="/Resources">Resources</Link>
        </li>
        <li>
          <Link to="/AdminArea">AdminArea</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
