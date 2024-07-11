import React from 'react';
import './Services.scss';

const services = [
  {
    title: 'Web Application Development',
    summary: 'Building responsive and dynamic web applications.',
    imageUrl: 'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1720395802~exp=1720399402~hmac=4871409f27f7d3da3370ccd61c3c7c5eb29de589b40d743e5265990047fc0d4c&w=1380'
  },
  {
    title: 'Mobile Application Development',
    summary: 'Creating intuitive and engaging mobile applications.',
    imageUrl: 'https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038916.jpg?t=st=1720397761~exp=1720401361~hmac=59ee07beccebc8a19bca2f0e8ef4e234d191a9e623da78ec704aacde99747ee9&w=1060'
  },
  {
    title: 'Desktop Application Development',
    summary: 'Developing efficient desktop applications for various platforms.',
    imageUrl: 'https://img.freepik.com/free-photo/freelance-programmer-working-remote-writing-code-software-pc-using-keyboard-debugging-algorithm-client-selective-focus-coder-computer-screen-with-programming-laguage-text_482257-64572.jpg?t=st=1720398067~exp=1720401667~hmac=e06cea1e89a177f7777b02aee9eb85cbadbd12a25637bcdeb91ef00b4b343509&w=740'
  },
  {
    title: 'API Integration',
    summary: 'Seamless integration with third-party APIs for enhanced functionality.',
    imageUrl: 'https://img.freepik.com/free-photo/saas-concept-collage_23-2149399295.jpg?t=st=1720398126~exp=1720401726~hmac=3fe1e2869ad9e1e748db9e1c7b72ff29b91a0a958e137f92a93c0c3cd0f93b09&w=1380'
  },
  {
    title: 'Graphic Design',
    summary: 'Crafting visually appealing and brand-aligned graphics.',
    imageUrl: 'https://img.freepik.com/free-photo/african-american-photographer-editing-digital-photography_482257-26776.jpg?t=st=1720398192~exp=1720401792~hmac=1e7844977cd441449bef51e6c712315079797ec7fe6de2c948499dabce848e6a&w=1380'
  },
  {
    title: 'Networking and Mapping',
    summary: 'Ensuring robust networking solutions and detailed mapping services.',
    imageUrl: 'https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg?t=st=1720398252~exp=1720401852~hmac=7c5e21b4227a524e2d0c8cda198064b1a3b7b8c3bcc89acb0c734bbe93cee86e&w=1380'
  }
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service">
            <div className="service-image">
           <img src={service.imageUrl} alt={service.title} />
           </div>
          <div className="service-details">
          <h3 className='desc'>{service.title}</h3>
          <p className='desc'>{service.summary}</p>
          </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
