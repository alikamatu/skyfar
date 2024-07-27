import React from 'react'
import './WhyUs.scss'
import photo from '../files/IMG_3647.JPG'

const WhyUs = () => {
  return (
    <div className='deal'>
      <div className="deal-photo">
        <img src={photo} alt="" />
      </div>
      <div className="deal-content">
        <div className="left">
          <h2>Take the Next Step Towards Innovation</h2>
          <p>Ready to elevate your business with cutting-edge technology? Download our latest 
            product now and unlock the full potential of your enterprise.</p>
        </div>
        <div className="right">
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
