import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import './Contact.scss';
import Navbar from '../navbar/Navbar';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    //   .then((result) => {
    //       console.log(result.text);
    //       alert('Message sent successfully!');
    //   }, (error) => {
    //       console.log(error.text);
    //       alert('Failed to send message. Please try again.');
    //   });

    e.target.reset();
  };

  return (
    <div className='contact'>
      <h1>Start with Us!</h1>
      <form ref={form} className='place-order' onSubmit={sendEmail}>
        <div className="place-order-left">
          <p className="title">Application Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='Full name' name="name" required />
            <input type="text" placeholder='Phone Number' name="phone" required />
          </div>
          <input placeholder='Email Address' type="email" name="email" required />
          <select name="project" required>
            <option value="Web Application Development">Web Application Development</option>
            <option value="Mobile Application Development">Mobile Application Development</option>
            <option value="Desktop Application Development">Desktop Application Development</option>
            <option value="Api Integration">Api Integration</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Networking and Mapping">Networking and Mapping</option>
          </select>
          <textarea type="text" placeholder='Project description' name="description" required />
          <p>Provide a supportive document (optional)</p>
          <input type="file" name="document" style={{ color: 'black' }} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <Navbar />
    </div>
  );
};

export default Contact;
