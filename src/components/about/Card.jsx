import React, { useRef } from 'react'
import './Card.scss'
import mobile from '../files/mobile.png'
import desktop from '../files/desktop.png'
import web from '../files/web.png'
import api from '../files/api.png'
import graphics from '../files/graphic.png'
import network from '../files/network.png'
import { FiArrowRightCircle } from 'react-icons/fi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Card = () => {

    
  const services = [
    {
      title: 'Web Application Development',
      summary: 'Building responsive and dynamic web applications.',
      imageUrl: web
    },
    {
      title: 'Mobile Application Development',
      summary: 'Creating intuitive and engaging mobile applications.',
      imageUrl: mobile
    },
    {
      title: 'Desktop Application Development',
      summary: 'Developing efficient desktop applications for various platforms.',
      imageUrl: desktop
    },
    {
      title: 'API Integration',
      summary: 'Seamless integration with third-party APIs for enhanced functionality.',
      imageUrl: api
    },
    {
      title: 'Graphic Design',
      summary: 'Crafting visually appealing and brand-aligned graphics.',
      imageUrl: graphics
    },
    {
      title: 'Networking and Mapping',
      summary: 'Ensuring robust networking solutions and detailed mapping services.',
      imageUrl: network
    }
  ];

  const scrollRef = useRef()

  useGSAP(()=> {
    const mainimg = gsap.utils.toArray(scrollRef.current.children);
    gsap.from(mainimg, {
      stagger: 0.2,
      opacity: 0,
      delay: 1.3,
      scrollTrigger: {
        trigger: mainimg,
        start: 'bottom bottom',
        end: 'top 20%',
        scrub: true
      }
    })
    gsap.from(".up", {
      y: 100,
      opacity: 1,
      duration: 1,
      stagger: 0.4
    })
  })

  return (
    <div className='card-container'>
      <h2 className='up'>Our Services</h2>
      <p className='title up'>Custom Services For Your Business</p>
            <div className="about-service" 
            ref={scrollRef}
            >
        {services.map((item, index) => {
          return <div key={index}
            class="service-card text-white bg-primary"
          >
           <div className="top">
           <img class="card-img-top" src={item.imageUrl} alt="Title" />
           <div className="right">
           <div className="round"></div>
          <div className="icon"> Read More<FiArrowRightCircle className='icon' /></div>
           </div>
           </div>
            <div class="card-body">
              <h4 class="card-title">{item.title}</h4>
              <p class="card-text">{item.summary}</p>
            </div>
          </div>
          
        })}
      </div>
    </div>
  )
}

export default Card