import React from 'react'
import './Offer.css'

export default function Offer() {
    return (
        <>
            <div className="container-fluid offer-section text-center d-flex justify-content-center align-items-center flex-column py-5">
                <h2 className="offer-heading">What We Offer</h2>
                <p className="offer-description">At Futbolix, we offer a wide range of football gear designed for every player and fan</p>
                <ul className="list-group">
                    <li className="list-group-item my-2">Legendary Jerseys - Relive iconic football moments</li>
                    <li className="list-group-item my-2">Modern Kits - Latest club and international designs</li>
                    <li className="list-group-item my-2">Football Boots - Built for performance and comfort</li>
                    <li className="list-group-item my-2">Fan-Made Jerseys - Creative and unique styles</li>
                    <li className="list-group-item my-2">Footballs & Training Gear - Essentials for every match</li>
                </ul>
            </div>
            <hr className="my-4 hr-blend" />
        </>
    )
}
