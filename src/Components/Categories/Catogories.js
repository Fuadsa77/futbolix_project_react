import React from 'react'
import './Categories.css'
import Jerseys from "../../Images/Categories-Section-Jerseys-Image.jpg"
import Boots from "../../Images/Categories-Section-Boots-Image.jpg"
import Football from "../../Images/Categories-Section-Football-Image.jpg"
import Accessories from "../../Images/Categories-Section-Accessories-Image.jpg"
import { NavLink } from 'react-router-dom'

export default function
    () {
    return (
        <>
            <div className="container-fluid categories-section py-5">
                <h2 className="categories-heading py-4">CATEGORIES</h2>
                <div className="row g-5 ">
                    <div className="col-6 col-sm-3">
                        <NavLink to="/shop?category=jersey">
                            <div className="card categories-card rounded-3">
                                <img src={Jerseys}
                                    className="img-fluid categories-card-image" />
                                <h3 className="categories-card-title">Jerseys</h3>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-6 col-sm-3">
                        <NavLink to="/shop?category=boot">
                            <div className="card categories-card rounded-3">
                                <img src={Boots} className="img-fluid categories-card-image" />
                                <h3 className="categories-card-title ">Boots</h3>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-6 col-sm-3">
                        <NavLink to="/shop?category=football">
                            <div className="card categories-card rounded-3">
                                <img src={Football}
                                    className="img-fluid categories-card-image" />
                                <h3 className="categories-card-title">Footballs</h3>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-6 col-sm-3">
                        <NavLink to="/shop?category=accessories">
                            <div className="card categories-card rounded-3">
                                <img src={Accessories}
                                    className="img-fluid categories-card-image" />
                                <h3 className="categories-card-title">Accessories</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <hr className="my-4 hr-blend" />
        </>
    )
}
