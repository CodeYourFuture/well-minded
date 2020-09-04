import React from "react";
import {Link} from "react-router-dom"
import '../css/Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-link ">
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      
        <p className="footer-text"> © project for CYF - Well-minded - ldn class 6 2020 </p>
    
    </footer>
  );
};
export default Footer;
