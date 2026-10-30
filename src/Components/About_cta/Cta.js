import React from 'react'
import {NavLink} from "react-router-dom";
import './Cta.css'

export default function Cta() {
    return (
        <>
            <div className="container-fluid cta-section text-center d-flex justify-content-center align-items-center flex-column py-5">
                <h2 className="cta-heading">Join the Game</h2>
                <h3 className="cta-description">Be part of the Futbolix community. Explore our latest collections and find the gear that defines your game.</h3>
                <NavLink to="/shop"><button className="btn cta-shop-button my-3">Shop Now</button></NavLink>
            </div>
        </>
    )
}
