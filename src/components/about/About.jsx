import React from 'react'
import './About.scss'
import Navbar from '../navbar/Navbar'

const About = () => {
  return (
    <div className='about'>
      <div className="about-head">
        <img src="https://img.freepik.com/free-photo/blur-portrait-team-young-office-workers-with-their-hands-focus-indoor-photo-laughing-international-students-stylish-attires-supporting-each-other-before-exams_197531-3779.jpg?t=st=1720457996~exp=1720461596~hmac=34b0239a73bf20cb073af25e18231fec256fe97ca23bd7d5e42ae6f54cbed395&w=1380" alt="" />
        <p className='about-text'>About <span style={{color: '#cea205'}}>Us</span></p>
        <div className="about-desc">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sequi modi sint soluta veniam rerum expedita molestias perspiciatis? Sunt deserunt vitae minus? Ab laborum, fuga laboriosam ipsum numquam eum molestias.
        Modi illum, commodi nostrum voluptatem ratione itaque consequatur quis sunt vel dolorum, soluta optio. Sed, magnam pariatur porro ad ullam nulla vel tempore fugit, nostrum quae mollitia explicabo expedita facere?
        Alias, cum molestias! Consectetur ipsa odio, deleniti quia debitis atque ad placeat esse officia voluptas non, asperiores nihil fuga nobis eveniet molestiae quae adipisci maiores nisi, impedit totam maxime incidunt.</p>
      </div>
      </div>
      <div className="about-team">
      <h1>Team</h1>
        <div className="team-temp">
            <div className="profile">
                <img src="/sample.jpg" alt="" />
            </div>
            <div className="details">
                <p className='name'>Alikamatu Osama</p>
                <p className="title">Full Stack</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo incidunt eveniet reprehenderit, officia eaque ea est possimus pariatur ipsum? Doloremque quam qui fugiat expedita sunt sit, tempore nihil magnam dicta!</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="team-temp second">
            <div className="profile">
                <img src="/sample.jpg" alt="" />
            </div>
            <div className="details">
                <p className='name'>Alikamatu Osama</p>
                <p className="title">Full Stack</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo incidunt eveniet reprehenderit, officia eaque ea est possimus pariatur ipsum? Doloremque quam qui fugiat expedita sunt sit, tempore nihil magnam dicta!</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="team-temp">
            <div className="profile">
                <img src="/sample.jpg" alt="" />
            </div>
            <div className="details">
                <p className='name'>Alikamatu Osama</p>
                <p className="title">Full Stack</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo incidunt eveniet reprehenderit, officia eaque ea est possimus pariatur ipsum? Doloremque quam qui fugiat expedita sunt sit, tempore nihil magnam dicta!</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="team-temp second">
            <div className="profile">
                <img src="/sample.jpg" alt="" />
            </div>
            <div className="details">
                <p className='name'>Alikamatu Osama</p>
                <p className="title">Full Stack</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo incidunt eveniet reprehenderit, officia eaque ea est possimus pariatur ipsum? Doloremque quam qui fugiat expedita sunt sit, tempore nihil magnam dicta!</p>
                <button>Read More</button>
            </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default About
