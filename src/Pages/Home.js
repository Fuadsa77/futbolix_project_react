import React from 'react'
import Navbar from '../Components/Navbar/navbar';
import Home_hero from '../Components/Home_hero/Hero'
import Categories from '../Components/Categories/Catogories'
import Featured from '../Components/Featured_section/Featured'
import Legendary from '../Components/Legendary_section/Legendary'
import Club from '../Components/Club_shop/Club'
import Reviews from '../Components/Reviews_section/Review'
import Newsletter from '../Components/Newsletter/News'
import Footer from '../Components/Footer/Footer'


export default function Home() {
  return (
    <div>
       <Navbar/>
       <Home_hero/>
       <Categories/>
       <Featured/>
       <Legendary/>
       <Club/>
       <Reviews/>
       <Newsletter/>
       <Footer/>
    </div>
  )
}
