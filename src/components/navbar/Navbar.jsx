import React, { useContext } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import logo from '../files/SkyFar2.png'


const Navbar = () => {


  return (
    <div>
       <div className="navbar">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navlinks">
              <ul>
                
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
