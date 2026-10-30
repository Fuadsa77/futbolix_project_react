import React from 'react'
import vd from '../../Videos/Hero-Intro-video.mp4'
import './hero.css'

export default function Hero() {
    return (
        <div>
            <div className="hero-section container-fluid" id="Hero-section">

                <video autoPlay muted loop playsInline className="bg-video">
                    <source src={vd} type="video/mp4" />
                </video>

                <div className="video-overlay"></div>

                <div className="container d-flex align-items-center justify-content-center fs-1 flex-column hero-content">
                    <h1 className="display-1 fw-bold">PLAY LIKE A PRO</h1>
                    <h2 className="display-5">GEAR UP WITH FUTBOLIX</h2>
                </div>
            </div>
        </div>
    )
}
