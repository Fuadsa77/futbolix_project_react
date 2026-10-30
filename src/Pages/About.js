import React from 'react'
import Navbar from '../Components/Navbar/navbar';
import Hero from '../Components/About_hero/Hero';
import Story from '../Components/About_story/Story'
import Mission_Vision from '../Components/About_mission_vision/Mission_vision'
import Choose from '../Components/About_choose/Choose'
import Offer from '../Components/About_offer/Offer'
import Team from '../Components/About_Team/Team'
import Cta from '../Components/About_cta/Cta'
import Footer from '../Components/Footer/Footer';

export default function About() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Story/>
      <Mission_Vision/>
      <Choose/>
      <Offer/>
      <Team/>
      <Cta/>
      <Footer/>
    </div>
  )
}
