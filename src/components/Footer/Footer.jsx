import React from 'react';
import './Footer.css';
import Logo from '../../assets/logo.png';
import { FaFacebook } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { SiAdidas } from 'react-icons/si';
import { SiNike } from 'react-icons/si';
import { SiPuma } from 'react-icons/si';

function Footer() {
  return (
    <div className='footer-container'>
      {/* LOGO */}
      <div className="footer-logo">
        <img src={Logo} alt="Logo loading error" className='logo'/>
      </div>

      {/* SOCIAL MEADIA ICONS */}
      <div className="footer-social-media-icons">
        <FaFacebook style={{fontSize : "2.125rem", color: "white"}}/>
        <FaReddit style={{fontSize : "2.125rem", color: "white"}}/>
        <FaSquareInstagram style={{fontSize : "2.125rem", color: "white"}}/>
        <FaTelegram style={{fontSize : "2.125rem", color: "white"}}/>
        <FaWhatsapp style={{fontSize : "2.125rem", color: "white"}}/>
      </div>

      {/* CONTACT NUMBER */}
      <div className="contact-number">
        <span>Give us a call at</span>
        <span> +91123456789</span>
      </div>

      {/* OUR PARTNERS */}
      <div className="our-partners">
        <div className="our-partners-heading">
          Our partners
        </div>
        <div className="our-partners-image">
          <SiAdidas style={{fontSize : "2.125rem", color: "white"}}/>
          <SiNike style={{fontSize : "2.125rem", color: "white"}}/>
          <SiPuma style={{fontSize : "2.125rem", color: "white"}}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
