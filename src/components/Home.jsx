import React, { useEffect } from 'react'
import Header from './header/Header'
import Services from './services/Services'
import Projects from './projects/Projects'
import './Home.scss'
import WhyUs from './whyus/WhyUs'
import Card from './about/Card'
import Team from './team/Team'

const Home = () => {

  return (
    <div className='home'>
      <div className="home-header">
      <Header />
      </div>
        <Card />
        <Team />
        <Projects />
        <WhyUs />
    </div>
  )
}

export default Home