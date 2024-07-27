import React, { useContext } from 'react'
import './Navbar.scss'
import { DarkModeContext } from '../darkModeContext';
import { Link } from 'react-router-dom';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa6';
import logo from '../files/SkyFar2.png'


const Navbar = () => {

    const {darkMode, toggle} = useContext(DarkModeContext)

  return (
    <div>
       <div className="navbar">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navlinks">
              <ul>
                {/* <li>        {
          darkMode ? (<p onClick={toggle}><FaMoon /></p>) :
          <p onClick={toggle}><FaSun /></p>
        }</li> */}
                <Link style={{textDecoration: "none"}} to='/'><li>Home</li></Link>
                <Link style={{textDecoration: "none"}} to='/about'><li>About</li></Link>
                <Link style={{textDecoration: "none"}} to='/contact'><li>Contact</li></Link>
              </ul>
            </div>
          </div>

    </div>
  )
}

export default Navbar
