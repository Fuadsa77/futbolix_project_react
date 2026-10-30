import React from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import './navbar.css';
import website_logo from '../../Icons/website-logo.png';
import login_img from '../../Icons/Login.png';
import menu_bar from '../../Icons/menu-bar.png';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const currentVh = window.innerHeight;
            let scrollThreshold = currentVh * 1;

            if (location.pathname === '/') {
                scrollThreshold = currentVh * 1;     
            } else if (location.pathname === '/about') {
                scrollThreshold = currentVh * 0.5;   
            } else if (location.pathname === '/shop') {
                scrollThreshold = currentVh * 0.5;   
            } else if (location.pathname === '/contact') {
                scrollThreshold = currentVh * 0.5;   
            }

            if (scrollTop >= scrollThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        handleScroll(); 
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <>
            <nav className={`navbar navbar-expand-lg modern-glass-nav fixed-top m-3 p-2 rounded-4 ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container-fluid">

                    <a className="navbar-brand me-auto d-flex align-items-center" href="{{ route('home') }}">
                        <img src={website_logo} className="img-fluid navbar-logo mx-2 rounded-5" alt="FUTBOLIX Logo" style={{ height: '32px' }} />
                        <span className="fw-bold tracking-wider text-white">FUTBOLIX</span>
                    </a>

                    {/* Responsive Offcanvas (Offcanvas on mobile, normal flex row on large screens) */}
                    <div className="offcanvas offcanvas-end offcanvas-lg modern-offcanvas" tabindex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header border-bottom border-light border-opacity-10 d-lg-none">
                            <h5 className="offcanvas-title mx-4 mt-2 fs-2 text-white fw-bold" id="offcanvasNavbarLabel">FUTBOLIX</h5>
                            <button type="button" className="btn-close btn-close-white me-2 shadow-none" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 gap-lg-2">
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => `nav-link px-3 py-2 rounded-pill ${isActive ? 'active' : ''}`}
                                    >
                                        HOME
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => `nav-link px-3 py-2 rounded-pill ${isActive ? 'active' : ''}`}
                                    >
                                        ABOUT
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/shop"
                                        className={({ isActive }) => `nav-link px-3 py-2 rounded-pill ${isActive ? 'active' : ''}`}
                                    >
                                        SHOP
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) => `nav-link px-3 py-2 rounded-pill ${isActive ? 'active' : ''}`}
                                    >
                                        CONTACT
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*  Laravel Auth State & Toggler  */}
                    <div className="d-flex align-items-center gap-3">

                        <a href="{{ route('login') }}" className="login-button d-flex align-items-center">
                            <img src={login_img} alt="Login" style={{ height: '24px' }} />
                        </a>

                        {/*  Mobile Toggler Button */}
                        <button className="navbar-toggler border-0 shadow-none p-1 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <img src={menu_bar} className="img-fluid" style={{ height: '30px' }} />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
