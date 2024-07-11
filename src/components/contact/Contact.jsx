import React from 'react'
import './Contact.scss'
import Navbar from '../navbar/Navbar'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Start with Us!</h1>
    <form className='place-order'>
      <div className="place-order-left">
          <p className="title">Application Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='Full name' name="" id="" required />
            <input type="text" placeholder='Phone Number' name="phone" id="" required />
          </div>
          <input placeholder='Email Adress' type="email" required />
          <select name="project" id="" required >
            <option value="">Web Application Development</option>
            <option value="">Mobile Application Development</option>
            <option value="">Desktop Application Development</option>
            <option value="">Api Integration</option>
            <option value="">Graphic Design</option>
            <option value="">Networking and Mapping</option>
            </select>
          {/* <div className="multi-fields">
            <input type="text" placeholder='City' name="" id="" />
            <input type="text" placeholder='State' name="" id="" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' name="" id="" />
            <input type="text" placeholder='Country' name="" id="" />
          </div> */}
          <textarea type="text" placeholder='Project description' name="" id="" required />
          <p>Provide a supportive document (optional)</p>
          <input type="file" name="" placeholder='Documents  (optional)' id="" />
        <button>Submit</button>
      </div>  
        </form>
        <Navbar />
    </div>
  )
}

export default Contact
