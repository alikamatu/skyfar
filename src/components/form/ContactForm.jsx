import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" />
        </label>
        <label>
          Project Type:
          <select name="projectType">
            <option value="web">Web Application</option>
            <option value="mobile">Mobile Application</option>
            <option value="desktop">Desktop Application</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
