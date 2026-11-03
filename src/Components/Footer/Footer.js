import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './Footer.css'
import Logo from '../../Icons/website-logo.png'
import Facebook from "../../Icons/facebook.png"
import Twitter from "../../Icons/twitter.png"
import Insta from "../../Icons/instagram.png"
import Scrolltop from "../../Icons/up-arrow.png"

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <footer className="container-fluid py-5 text-white">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <h3 className="footer-heading">
                            <span><img src={Logo} className="img-fluid footer-company-icon mx-2" /></span>Futbolix
                        </h3>
                        <p className="footer-heading-description py-3"><strong>Futbolix</strong> is your ultimate destination for
                            premium football gear. From legendary jerseys to modern boots and training essentials, we bring the
                            passion of the game to every player and fan.</p>
                    </div>
                    <div className="col-3 col-md-4 col-lg-3">
                        <h4 className="footer-sub-heading text-center pt-md-5">Quick Links</h4>
                        <ul type="none" className="footer-list-group">
                            <li>
                                <NavLink to='/' className={({ isActive }) => `footer-link ${isActive ? 'active' : ''}`}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className={({ isActive }) => `footer-link ${isActive ? 'active' : ''}`}>
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/shop' className={({ isActive }) => `footer-link ${isActive ? 'active' : ''}`}>
                                    Shop
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/contact' className={({ isActive }) => `footer-link ${isActive ? 'active' : ''}`}>
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="col-3 col-md-4 col-lg-3">
                        <h4 className="footer-sub-heading text-center pt-md-5">Categories</h4>
                        <ul type="none" className="footer-list-group">
                            <NavLink to='/shop'>
                                <li className="footer-link">Jerseys</li>
                            </NavLink><NavLink to='/shop'>
                                <li className="footer-link">Footballs</li>
                            </NavLink><NavLink to='/shop'>
                                <li className="footer-link">Boots</li>
                            </NavLink><NavLink to='/shop'>
                                <li className="footer-link">Accessories</li>
                            </NavLink>
                        </ul>

                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <h4 className="footer-sub-heading pt-md-5">Contact Info</h4>
                        <ul type="none" className="footer-list-group">
                            <a href="Johndoe@gmail.com">
                                <li className="footer-link-2">Email: support@Futbolix.com</li>
                            </a>
                            <a href="#">
                                <li className="footer-link-2">Phone: +91 9510356278</li>
                            </a>
                            <li className="footer-open-map"><button type="button" className="btn footer-open-map-button"
                                data-bs-toggle="modal" data-bs-target="#Footer-open-map">Location</button></li>
                        </ul>
                    </div>
                </div>
                {/* Map in modal */}
                <div className="modal" id="Footer-open-map">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Our Location</h5>
                                <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2007338931435!2d75.78172797440341!3d11.246638950345885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6590722a91fdd%3A0x9dda6cc3bf53ce47!2sZONEMAC%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1775399897277!5m2!1sen!2sin"
                                    className="footer-locaton-map" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-social-media">
                    <a href=""><img src={Facebook} alt=".." className="img-fluid footer-social-media-icons mx-3" /></a>
                    <a href=""><img src={Twitter} alt=".." className="img-fluid footer-social-media-icons mx-3" /></a>
                    <a href=""><img src={Insta} alt=".." className="img-fluid footer-social-media-icons mx-3" /></a>
                </div>
                <div className="footer-scroll-up">
                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        style={{ background: "none", border: "none", padding: 0 }}
                    ><img src={Scrolltop} alt=".." className="img-fluid footer-scroll-up-icon" />
                    </button>
                </div>
                <div className="copy-right mt-3">
                    <span>&copy; 2026 Futbolix. All rights reserved.</span>
                </div>
            </footer >
        </>
    )
}
