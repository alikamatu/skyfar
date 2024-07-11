import React from 'react'
import './Footer.scss'
import logo from '../files/SkyFar2.png'
import send from '../files/down_button_100px.png'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-content">
     <div className="left">
        <div className="company">
            <img src={logo} alt="" />
            <p>For furthur enquiries</p>
        </div>
        <div className="search">
            <input type="email" placeholder='Your email' />
            <img src={send} alt="" />
        </div>
      </div>
      <div className="center">
            <h2>Company</h2>
            <p>About</p>
            <p>Team</p>
            <p>F&Q</p>
            <p>Contact</p>
      </div>
      <div className="right">
            <h2>Socials</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>WhatsApp</p>
      </div>
     </div>
      <hr />
      <div className="copy">
        <p>&copy; Skyfar Inc. All Rights Reserved 2024</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer
