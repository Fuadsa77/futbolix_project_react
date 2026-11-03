import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './Legendary.css'
import England_Legendary_Shirt_1998 from "../../Images/Products/England-Legendary-Shirt-1998.jpg"
import Manchester_United_Legendary_Shirt_2007_08 from "../../Images/Products/Manchester-United-Legendary-Shirt-2007-08.jpg"
import Real_Madrid_Legendary_Shirt_2002_2003 from "../../Images/Products/Real-Madrid-Legendary-Shirt-2002-2003.jpg"
import Barcelona_100th_Anniversary_Legendary_Shirt_1998_1999 from "../../Images/Products/Barcelona-100th-Anniversary-Legendary-Shirt-1998-1999.jpg"
import Liverpool_Legendary_Shirt_1993_1995 from "../../Images/Products/Liverpool-Legendary-Shirt-1993-1995.jpg"
import Ac_Milan_Legendary_Shirt_2006_07 from "../../Images/Products/Ac-Milan-Legendary-Shirt-2006-07.jpg"

export default function Legendary() {
    return (
        <>
            <div className="container-fluid legendary-section py-5">
                <h2 className="legendary-heading pb-3">LEGENDARY JERSEYS</h2>
                <h3 className="legendary-sub-heading pb-4">Relive the Greatest Moments in Football</h3>
                <div className="row g-4 ">

                    {/* National icons */}
                    <div className="col-6 col-sm-4 d-flex justify-content-center">
                        <a href="#" className="legendary-link">
                            <div className="card legendary-card">
                                <div className="card-body">
                                    <img src={England_Legendary_Shirt_1998}
                                        className="img-fluid legendary-card-image" />
                                </div>
                                <div className="card-footer">
                                    <h4 className="legendary-card-title">England 1998</h4>
                                </div>
                            </div>
                        </a>
                    </div>

                     {/* Club legends */}
                    <div className="col-6 col-sm-4 d-flex justify-content-center">
                        <a href="#" className="legendary-link">
                            <div className="card legendary-card">
                                <div className="card-body">
                                    <img src={Manchester_United_Legendary_Shirt_2007_08}
                                        className="img-fluid legendary-card-image" />
                                </div>
                                <div className="card-footer">
                                    <h4 className="legendary-card-title">Manchester United 2007/08</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-sm-4 d-flex justify-content-center">
                        <a href="#" className="legendary-link">
                            <div className="card legendary-card">
                                <div className="card-body">
                                    <img src={Real_Madrid_Legendary_Shirt_2002_2003}
                                        className="img-fluid legendary-card-image" />
                                </div>
                                <div className="card-footer">
                                    <h4 className="legendary-card-title">Real Madrid 2002/2003</h4>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-sm-4 d-flex justify-content-center">
                        <a href="#" className="legendary-link">
                            <div className="card legendary-card">
                                <div className="card-body">
                                    <img src={Barcelona_100th_Anniversary_Legendary_Shirt_1998_1999}
                                        className="img-fluid legendary-card-image" />
                                </div>
                                <div className="card-footer">
                                    <h4 className="legendary-card-title">Barcelona 100th Anniversary 1998/1999</h4>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Retro classics */}
                    <div className="col-6 col-sm-4 d-flex justify-content-center">
                        <a href="#" className="legendary-link">
                            <div className="card legendary-card">
                                <div className="card-body">
                                    <img src={Liverpool_Legendary_Shirt_1993_1995}
                                        className="img-fluid legendary-card-image" />
                                </div>
                                <div className="card-footer">
                                    <h4 className="legendary-card-title">Liverpool 1993-1995</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-sm-4 d-flex justify-content-center">
                        <a href="#" className="legendary-link">
                            <div className="card legendary-card">
                                <div className="card-body">
                                    <img src={Ac_Milan_Legendary_Shirt_2006_07}
                                        className="img-fluid legendary-card-image" />
                                </div>
                                <div className="card-footer">
                                    <h4 className="legendary-card-title">Ac Milan 2006/07</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="view-more d-flex justify-content-center">
                    <NavLink to="/shop?category=jersey&jerseyType=legendary" className="btn">
                        View More
                    </NavLink>
                </div>
            </div>
            <hr className="my-4 hr-blend" />
        </>
    )
}
