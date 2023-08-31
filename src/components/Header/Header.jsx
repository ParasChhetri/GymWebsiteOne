import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa6';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  let mobile = window.innerWidth <= 768 ? true : false; 
  let [menuOpen, setMenuOpened] = useState(false);
  return (
    <div className="header">
        <img src={Logo} alt="logo" className='logo'/>
        {(menuOpen === false && mobile === true) ? (<div onClick={() => setMenuOpened(true)}><FaBars style={{width: "3rem", height: "3rem"}}/></div>) : <ul className='header-menu'>
            <li><Link to='hero' span={true} smooth={true} onClick={() => setMenuOpened(false)}>Home</Link></li>
            <li><Link to='programs' span={true} smooth={true} onClick={() => setMenuOpened(false)}>Programs</Link></li>
            <li><Link to='reasons' span={true} smooth={true} onClick={() => setMenuOpened(false)}>Why us</Link></li>
            <li><Link to='plans' span={true} smooth={true} onClick={() => setMenuOpened(false)}>Plans</Link></li>
            <li><Link to='testimonials' span={true} smooth={true} onClick={() => setMenuOpened(false)}>Testimonials</Link></li>
        </ul>}
        
    </div>
  );
}

export default Header;
