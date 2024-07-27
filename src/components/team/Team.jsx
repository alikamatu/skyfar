import React, { useRef, useEffect } from 'react';
import './Team.scss';
import { FaUserFriends } from 'react-icons/fa';
import { FaHandshake, FaHeartCirclePlus } from 'react-icons/fa6';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const scrollRef = useRef();

  useEffect(() => {
    gsap.from('.title h2', {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.title',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.text .para', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.text',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
    const imgDivs = gsap.utils.toArray('.img-div');
    imgDivs.forEach((div, i) => {
      gsap.from(div, {
        opacity: 0,
        y: 100,
        scale: 0.5,
        rotation: 10,
        duration: 1.5,
        delay: i * 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: div,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Image on the right animations
    gsap.from('.right img', {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.right img',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Button animation
    gsap.from('button', {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: 'button',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className='team'>
      <div className="team-container">
        <div className="left">
          <div className="title">
            <h2>Our Team</h2>
          </div>
          <div className="text">
            <p className='para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta delectus, commodi voluptate 
              accusantium iusto, perferendis natus dolorem soluta 
              deserunt pariatur nesciunt, autem nulla repellat repellendus molestiae mollitia? Est, adipisci?
            </p>
            <div className="content" ref={scrollRef}>
              <div className="img-div">
                <FaHeartCirclePlus className='icon' />
                <h3>Passion</h3>
                <p className='para'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum, accusamus magnam quidem ipsam modi suscipit? Aperiam deleniti beatae explicabo libero molestias magnam, consequatur ipsum repellat reiciendis animi asperiores omnis?
                </p>
              </div>
              <div className="img-div">
                <FaHandshake className='icon' />
                <h3>Professional</h3>
                <p className='para'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum, accusamus magnam quidem ipsam modi suscipit? Aperiam deleniti beatae explicabo libero molestias magnam, consequatur ipsum repellat reiciendis animi asperiores omnis?
                </p>
              </div>
              <div className="img-div">
                <FaUserFriends className='icon' />
                <h3>Support</h3>
                <p className='para'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum, accusamus magnam quidem ipsam modi suscipit? Aperiam deleniti beatae explicabo libero molestias magnam, consequatur ipsum repellat reiciendis animi asperiores omnis?
                </p>
              </div>
            </div>
          </div>
          <button>Read More</button>
        </div>
        <div className="right">
          <img src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
        </div>
      </div>
    </div>
  );
}

export default Team;
