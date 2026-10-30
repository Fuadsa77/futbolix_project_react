import React from 'react'
import Navbar from '../Components/Navbar/navbar';
import Hero from '../Components/Contact_hero/Hero';
import Contact_con from '../Components/Contact_contacts/Contact';
import Map from '../Components/Contact_map/Map';
import Social from '../Components/Contact_social/Social';
import Footer from '../Components/Footer/Footer'

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Contact_con/>
      <Map/>
      <Social/>
      <Footer/>
    </div>
  )
}
