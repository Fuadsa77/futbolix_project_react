import React from 'react'
import './Map.css'

export default function Map() {
    return (
        <>
            <div className="conatiner-fluid map-section py-5">
                <h3 className="map-heading text-center pb-3">Location in Map</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2007338931435!2d75.78172797440341!3d11.246638950345885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6590722a91fdd%3A0x9dda6cc3bf53ce47!2sZONEMAC%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1775399897277!5m2!1sen!2sin" className="contact-locaton-map" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}
