import React, { useRef } from 'react'
import photo from '../files/chooseus.png'
import './Team.scss'
import { FaUserFriends } from 'react-icons/fa'
import {FaHandshake, FaHeartCirclePlus } from 'react-icons/fa6'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Team = () => {

  const scrollRef = useRef()

  useGSAP(()=> {
    const mainimg = gsap.utils.toArray(scrollRef.current.children);
    gsap.from(mainimg, {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: mainimg,
        start: 'bottom bottom',
        end: 'top 20%',
        scrub: true
      }
    })
  })

  return (
    <div className='team'>
      <div className="team-container">
        <div className="left">
          <div className="title">
            <h2>Our Team</h2>
          </div>
         <div className="text" ref={scrollRef}>
         <p className='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta delectus, commodi voluptate 
          accusantium iusto, perferendis natus dolorem soluta 
          deserunt pariatur nesciunt, autem nulla repellat repellendus molestiae mollitia? Est, adipisci?
          </p>
          <div className="content" ref={scrollRef}>
        <div className="img-div">
        <FaHeartCirclePlus className='icon' />
        <h3>Passion</h3>
        <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum, accusamus magnam quidem ipsam modi suscipit? Aperiam deleniti beatae explicabo libero molestias magnam, consequatur ipsum repellat reiciendis animi asperiores omnis?</p>
          </div>
          <div className="img-div">
        <FaHandshake className='icon' />
        <h3>Professional</h3>
        <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum, accusamus magnam quidem ipsam modi suscipit? Aperiam deleniti beatae explicabo libero molestias magnam, consequatur ipsum repellat reiciendis animi asperiores omnis?</p>
      </div>
      <div className="img-div">
        <FaUserFriends className='icon' />
        <h3>Support</h3>
        <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum, accusamus magnam quidem ipsam modi suscipit? Aperiam deleniti beatae explicabo libero molestias magnam, consequatur ipsum repellat reiciendis animi asperiores omnis?</p>
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
  )
}

export default Team
