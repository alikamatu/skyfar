import React, { useRef, useEffect } from 'react';
import './About.scss';
import Navbar from '../navbar/Navbar';
import film from '../files/About - STAX.mp4';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const para = gsap.utils.toArray(scrollRef.current.children);

    gsap.from(para, {
      opacity: 0,
      stagger: 0.4,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: para,
        start: 'bottom bottom',
        end: 'top 20%',
        scrub: true
      }
    });

    gsap.from(".content h1", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".content h1",
        start: 'top 90%',
        end: 'top 50%',
        scrub: true
      }
    });

    gsap.from(".about-text p", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-text p",
        start: 'top 90%',
        end: 'top 50%',
        scrub: true
      }
    });

    gsap.from(".status-head h2", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".status-head h2",
        start: 'top 90%',
        end: 'top 50%',
        scrub: true
      }
    });

    gsap.from(".status-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".status-text",
        start: 'top 90%',
        end: 'top 50%',
        scrub: true
      }
    });
  }, []);

  return (
    <div className='about'>
      <div className="about-container">
        <div className="video-div">
          <video loop autoPlay muted playsInline preload='auto'>
            <source src={film} type='video/mp4' />
          </video>
        </div>
        <div className="content">
          <h1>About Us</h1>
          <hr />
        </div>
        <div className="about-text">
          <p>
            Skyfar is leading web hosting, online marketing, e-commerce, online payments and web development company, with offices in Harare and Bulawayo. Webdev has been in business for over 20 years in Zimbabwe, and we have developed over 1,000 web sites, we have over 3,000 hosting clients, over 1,000 online payment merchants, and over 30,000 online classifieds adverts. With a considerable skill set at our disposal from the Webdev team, we are uniquely positioned to offer specialist web-based solutions for a diverse range of client requirements.
          </p>
        </div>
        <div className="status">
          <div className="status-head">
            <h2>Core Values</h2>
          </div>
          <div className="status-text">
            <div className='square'></div>
            <h2>Excellent Customer Service</h2>
            <hr />
            <p>We are committed to providing excellent Customer Service. We take ownership of challenges, anticipate client’s needs and respond proactively, delivering on promised solutions. We constantly benchmark ourselves against our competitors, and fulfill our customers’ expectations.</p>
          </div>
          <div className="status-text">
            <div className='square'></div>
            <h2>Honest and timely communication</h2>
            <hr />
            <p>We have an unwavering commitment to open, honest and timely communication, both with our client-base and internally, with staff. Clarity in understanding our goals and what we expect from each other is critical to making the best decisions and providing superior service.</p>
          </div>
          <div className="status-text">
            <div className='square'></div>
            <h2>Successful implementation</h2>
            <hr />
            <p>We make informed decisions and align ourselves around successful implementation. We collect data, analyze facts, and consider options before making decisions. We focus on execution and measurable results ensuring our actions remain rooted in sound judgment.</p>
          </div>
          <div className="status-text">
            <div className='square'></div>
            <h2>Innovation</h2>
            <hr />
            <p>The best way to have one great idea is to start with a lot of ideas. We make a habit of asking, “Is there a better way?” Good business people challenge conventional thinking and offer new ideas. We believe that all of us are smarter than any one of us. Success lies in our ability to align innovation, service and operational excellence to exceed customer expectations. We invite diverse thinking and expect aligned action.</p>
          </div>
          <div className="status-text">
            <div className='square'></div>
            <h2>Positive work/life balance</h2>
            <hr />
            <p>We believe that individuals who are treated with respect and given responsibility respond by giving their best. We treat others as we want to be treated and value a positive work/life balance.</p>
          </div>
          <div className="status-text">
            <div className='square'></div>
            <h2>Team work</h2>
            <hr />
            <p>We make commitments with care and live up to them. We’re never passive, but insist on giving our best effort in everything we undertake. We rely on each other for shared success.</p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default About;
