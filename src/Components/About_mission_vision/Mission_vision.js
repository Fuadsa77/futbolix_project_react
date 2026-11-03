import React from 'react'
import './Mission_vision.css'
import Mission_image from '../../Images/about-mission-image.jpg'
import Vision_image from '../../Images/about-vision-image.jpg'

export default function Mission_vision() {
  return (
    <>
    <div className="container-fluid mission-vision-section d-flex align-items-center flex-column mt-0 pt-0 pt-md-2 pb-5 gap-4 gap-md-5">
    
        {/*  Mission Box  */}
        <div className="mission-box d-flex flex-column flex-md-row flex-1 align-items-center justify-content-center gap-4 w-100" style={{maxWidth:'1100px'}}>
            <div className="mission-body py-3 px-4 d-flex justify-content-center flex-column text-center">
                <h3 className="mission-heading">Our Mission</h3>
                <p className="mx-3">Our mission is to provide high-quality football gear that connects people to the spirit of the game.
                    We aim to deliver products that combine performance, comfort, and style — helping players perform at their best
                    while allowing fans to represent their passion with pride.</p>
            </div>
            
            
            <div className="mission-head d-flex align-items-center justify-content-center  p-3">
                <img src={Mission_image} alt="Our Mission Image" className="img-fluid rounded-3 about-images"/>
            </div>
        </div>

        {/*  Vision Box */}
        <div className="vision-box d-flex flex-column flex-md-row-reverse align-items-center justify-content-center gap-4 w-100" style={{maxWidth: '1100px'}}>
            <div className="vision-body py-3 px-4 d-flex justify-content-center flex-column text-center">
                <h3 className="vision-heading">Our Vision</h3>
                <p className="mb-0">We envision Futbolix as a global destination for football enthusiasts — a place where fans, players, and communities come together to celebrate the sport. Our goal is to inspire the next generation of football lovers while honoring the legacy of the game.</p>
            </div>

            {/* Fixed: Removed me-3, changed to flex-md-row-reverse above to automatically flip image order smoothly */}
            <div className="mission-vision-head d-flex align-items-center justify-content-center p-3">
                <img src={Vision_image} alt="Our Vision Image" className="img-fluid rounded-3 about-images"/>
            </div>
        </div>
    </div>
    </>
  )
}
