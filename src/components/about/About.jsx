import React from 'react'
import './About.scss'
import Navbar from '../navbar/Navbar'
import film from '../files/About - STAX.mp4'

const About = () => {
  return (
    <div className='about'>
      <div className="about-container">
       <div className="video-div">
       <video loop autoPlay muted>
          <source src={film} type='video/mp4' />
        </video>
       </div>
       <div className="content">
        <h1>About Us</h1>
       </div>
       <div className="about-text">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reiciendis impedit, tempora quod esse dolore possimus exercitationem aperiam placeat, facere similique quidem ipsam suscipit. Similique reprehenderit nobis sint consequuntur at?
          Similique provident, vel nesciunt impedit ex atque, dicta quidem quos ipsum sequi, ratione maiores enim adipisci sunt sed dignissimos harum ipsa suscipit at repudiandae tempore fuga ab. Pariatur, sapiente et.
          Dolorum repudiandae iste, asperiores libero impedit eius sapiente esse minus veniam adipisci amet porro, velit totam facere quidem eos dolores voluptatum accusamus cupiditate tempora repellendus vel alias error quae! Odio!
          Necessitatibus ipsam sunt odio quisquam cum nemo accusantium culpa. Aliquam cumque amet earum, sapiente magni ipsa porro provident laboriosam. Impedit consectetur sint consequuntur exercitationem magnam nam a excepturi minus inventore!
        </p>
       </div>
      </div>
      <Navbar />
    </div>
  )
}

export default About
