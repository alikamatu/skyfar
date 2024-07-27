import Navbar from '../navbar/Navbar';
import React, { useEffect, useRef } from 'react';
import './Header.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const scrollRef = useRef();

  useEffect(() => {
    gsap.from(".right", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1.3,
      stagger: 0.5
    });

    gsap.from(".left h2", {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    });

    gsap.from(".btn-div", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 2,
      ease: "power3.out",
      stagger: 0.2
    });

    const mainimg = gsap.utils.toArray(scrollRef.current.children);
    gsap.to(mainimg, {
      scale: 1.2,
      scrollTrigger: {
        trigger: mainimg,
        start: 'bottom bottom',
        end: 'top 20%',
        scrub: true
      }
    });
  }, []);

  return (
    <div className='header'>
      <div className="header-container">
        <div className="top">
          <div className="left">
            <h2>Sophisticated Web Solutions for the Modern Enterprise</h2>
          </div>
          <div className="right">
            <div className="text">Enhance your business with a refined and versatile Skyfar.</div>
            <div className="btn-div">
              <Link className='text' to='/contact'>
                <p className='text'>Get Started</p>
              </Link>
              <Link className='text' to='/about'>
                <p className='text'>Learn More</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="down" ref={scrollRef}>
          <img className='mainimg' src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds' alt="" />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
