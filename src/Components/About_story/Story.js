import React from 'react'
import './Story.css'
import Story_image from '../../Images/about-us-photo.jpg';

export default function Story() {
    return (
        <>
            <div className="container-fluid story-section py-5">
                <div className="row">
                    <div className="col-12 story-box d-flex flex-column flex-md-row align-items-center justify-content-center">
                        <div className="story-head d-flex justify-content-center align-items-center text-center p-3 me-md-3">
                            <img src={Story_image} alt="this image isn't showing" className="img-fluid rounded-3 about-images"/>
                        </div>

                        <div className="story-body py-3 px-4 d-flex justify-content-center align-items-center flex-column text-center text-md-start">
                            <h3 className="story-heading">Our Story</h3>
                            <p>Futbolix was born from a deep passion for the beautiful game. Football is more than just a sport
                                — it is emotion, identity, and history. From unforgettable goals to legendary players, every
                                moment lives on through the kits and gear that define generations.
                                We created Futbolix to bring that experience closer to fans and players. Whether it’s a classic
                                jersey from a historic season or the latest performance boots, our collection is designed to
                                celebrate football in every form. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
