import React, { useContext } from 'react';
import './Header.scss';
import logo from '../files/SkyFar2.png'
import { DarkModeContext } from '../darkModeContext';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa6';
import Navbar from '../navbar/Navbar';

const Header = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);


  return (
    <header className="header">
        {/* <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        <div className="header-content">
          <div className="left">
        <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="right">
            <p className='title'>Build your creativity with Us</p>
            <p className='text'>Build your ideal project with your own timeline</p>
            <button>Explore</button>
          </div>
        </div>
        <Navbar />
        {/* <div className="navbar">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navlinks">
              <ul>
                <li>        {
          darkMode ? (<p onClick={toggle}><FaMoon /></p>) :
          <p onClick={toggle}><FaSun /></p>
        }</li>
                <Link style={{textDecoration: "none"}} to='/'><li>Home</li></Link>
                <Link style={{textDecoration: "none"}} to='/about'><li>About</li></Link>
                <Link style={{textDecoration: "none"}} to='/contact'><li>Contact</li></Link>
              </ul>
            </div>
          </div> */}
    </header>
  );
};

export default Header;
