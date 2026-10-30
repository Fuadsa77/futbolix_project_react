import React from 'react'
import Navbar from '../Components/Navbar/navbar';
import Banner from '../Components/Shop_banner/Banner';
import Main from '../Components/Shop_Main/Main';
import Footer from '../Components/Footer/Footer'

export default function Shop() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Main/>
      <Footer/>
    </div>
  )
}
