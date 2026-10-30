import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './Club.css'
import Real_Madrid from "../../Images/Club-Shop-Real-Madrid.jpg"
import Barcelona from "../../Images/Club-Shop-Barcelona.jpg"
import Acmilan from "../../Images/Club-Shop-Ac-Milan.jpg"
import Mancity from "../../Images/Club-Shop-Man-City.jpg"

export default function Club() {
    return (
        <>
            <div className="container-fluid club-shop-section py-5">
                <h2 className="club-shop-heading pb-4">SHOP BY CLUB</h2>
                <div className="row g-3">
                    {/* Real madrid */}
                    <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <a href="#">
                            <div className="card club-card">
                                <div className="card-body">
                                    <img src={Real_Madrid} className="img-fluid" />
                                    <div className="club-card-overlay">
                                        <h4>Real Madrid</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Barcelona */}
                    <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <a href="#">
                            <div className="card club-card">
                                <div className="card-body">
                                    <img src={Barcelona} className="img-fluid" />
                                    <div className="club-card-overlay">
                                        <h4>Barcelona</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Manchester City  */}
                    <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center d-md-none d-lg-block">
                        <a href="#">
                            <div className="card club-card">
                                <div className="card-body">
                                    <img src={Mancity} className="img-fluid" />
                                    <div className="club-card-overlay">
                                        <h4>Manchester City</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Ac milan  */}
                    <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <a href="#">
                            <div className="card club-card">
                                <div className="card-body">
                                    <img src={Acmilan} className="img-fluid" />
                                    <div className="club-card-overlay">
                                        <h4>Ac Milan</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="view-more d-flex justify-content-center">
                    <NavLink to="/shop"><button type="button" className="btn">View More</button></NavLink>
                </div>
            </div>
            <hr className="my-4 hr-blend" />
        </>
    )
}
