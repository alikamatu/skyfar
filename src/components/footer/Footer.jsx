import React from 'react'
import './Footer.scss'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { LiaLinkedin } from 'react-icons/lia'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="top">
          <div className="content">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Blog</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="content">
            <h3>Support</h3>
            <p>Knowledge Base</p>
            <p>FAQs</p>
            <p>Documentation</p>
            <p>Community Forum</p>
          </div>
        </div>
        <hr />
        <div className="bottom">
        <h2>Skyfar</h2>
        <p>&copy; All Rights Reserved</p>
        <div className="socials">
          <FaFacebook className='icon' />
          <FaXTwitter className='icon' />
          <LiaLinkedin className='icon' />
          <FaWhatsapp className='icon' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
