import React from 'react'
import './Featured.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import cart from "../../Icons/Cart.png"
import Wishlist from "../../Icons/Wishlist.png"
import Portugal_Away_Shirt_World_Cup_2026 from "../../Images/Products/Portugal-Away-Shirt-World-Cup-2026-Ronaldo-7.jpg"
import Argentina_Awaya_Shirt_World_Cup_2026 from "../../Images/Products/Argentina-Away-Shirt-World-Cup-2026-Messi-10.jpg"
import Nike_Football_Flight_White_Blackened_Blue_Hyper_Crimson from "../../Images/Products/Nike-Football-Flight-White-Blackened-Blue-Hyper-Crimson.jpg"
import Adidas_F50_League_In_Ice_Cold_Precision_Lucid_Ray_blue_Solar_Yellow_light_Utility_Aqua_Kids from "../../Images/Products/Adidas-F50-League-In-Ice-Cold-Precision-Lucid-Ray-blue-Solar-Yellow-light-Utility-Aqua-Kids.jpg"
import Real_Madrid_Home_Shirt_2025_26 from "../../Images/Products/Real-Madrid-Home-Shirt-2025-26.jpg"
import Brazil_Away_Shirt_Wolrd_Cup_2026 from "../../Images/Products/Brazil-Away-Shirt-Wolrd-Cup-2026.jpg"
import Paris_Saint_German_Away_Shirt_2025_26 from "../../Images/Products/Paris-Saint-Germain-Away-Shirt-2025-26.jpg"
import Nike_Football_Academy_T90_White_Black_Red_Black from "../../Images/Products/NIke-Football-Academy-T90-White-Black-Red-Black.jpg"

export default function Featured() {
    return (
        <>
            <div className="container-fluid featured-section py-5">
                <h2 className="featured-heading pb-4">FEATURED PRODUCTS</h2>
                <div className="row g-3">
                    {/* Product 1 */}
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="card featured-card">
                            <div className="card-header">
                                <img src={Portugal_Away_Shirt_World_Cup_2026}
                                    className="img-fluid featured-products-image rounded-4" />
                                <div className="product_special_note">
                                    <span>Authentic</span>
                                </div>
                                <a href="#"
                                    className="featured-product-wishlist-button d-flex justify-content-center align-items-center">
                                    <span><img src={Wishlist} className="img-fluid featured-product-wishlist" /></span>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="featured-products-name">Portugal Away Shirt World Cup 2026 Authentic RONALDO 7</h4>
                            </div>
                            <div className="card-footer">
                                <div className="featured-products-price">
                                    <span>₹18,999</span>
                                    <a href="#"
                                        className="featured-product-cart-button d-flex justify-content-center align-items-center">
                                        <img src={cart} className="img-fluid featured-products-cart" alt='..' />
                                    </a>
                                </div>
                                <div className="featured-products-footer-info">Many Sizes Available</div>
                            </div>
                        </div>
                    </div>


                    {/* Product 2 */}
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="card featured-card">
                            <div className="card-header">
                                <img src={Argentina_Awaya_Shirt_World_Cup_2026}
                                    className="img-fluid featured-products-image rounded-4" alt="Argentina Away Shirt" />
                                <div className="product_special_note">
                                    <span>Authentic</span>
                                </div>
                                <a href="#"
                                    className="featured-product-wishlist-button d-flex justify-content-center align-items-center">
                                    <span><img src={Wishlist} className="img-fluid featured-product-wishlist" alt="Wishlist" /></span>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="featured-products-name">Argentina Away Shirt World Cup 2026 Messi 10</h4>
                            </div>
                            <div className="card-footer">
                                <div className="featured-products-price">
                                    <span>₹10,799</span>
                                    <a href="#"
                                        className="featured-product-cart-button d-flex justify-content-center align-items-center">
                                        <img src={cart} className="img-fluid featured-products-cart" alt='Cart' />
                                    </a>
                                </div>
                                <div className="featured-products-footer-info">Many sizes available</div>
                            </div>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex">
                        <div className="card featured-card">
                            <div className="card-header">
                                <img src={Nike_Football_Flight_White_Blackened_Blue_Hyper_Crimson}
                                    className="img-fluid featured-products-image rounded-4" alt="Nike Football Flight" />
                                <a href="#"
                                    className="featured-product-wishlist-button d-flex justify-content-center align-items-center">
                                    <span><img src={Wishlist} className="img-fluid featured-product-wishlist" alt="Wishlist" /></span>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="featured-products-name">Nike Football Flight - White/Blackened Blue/Hyper Crimson</h4>
                            </div>
                            <div className="card-footer">
                                <div className="featured-products-price">
                                    <span>₹11,299</span>
                                    <a href="#"
                                        className="featured-product-cart-button d-flex justify-content-center align-items-center">
                                        <img src={cart} className="img-fluid featured-products-cart" alt='Cart' />
                                    </a>
                                </div>
                                <div className="featured-products-footer-info">&nbsp;</div>
                            </div>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="card featured-card">
                            <div className="card-header">
                                <img src={Adidas_F50_League_In_Ice_Cold_Precision_Lucid_Ray_blue_Solar_Yellow_light_Utility_Aqua_Kids}
                                    className="img-fluid featured-products-image rounded-4" alt="Adidas F50 League" />
                                <div className="product_special_note">
                                    <span>Kids</span>
                                </div>
                                <a href="#"
                                    className="featured-product-wishlist-button d-flex justify-content-center align-items-center">
                                    <span><img src={Wishlist} className="img-fluid featured-product-wishlist" alt="Wishlist" /></span>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="featured-products-name">Adidas F50 League In Ice Cold Precision - Lucid Ray Blue/Solar Yellow/Light Utility Aqua Kids</h4>
                            </div>
                            <div className="card-footer">
                                <div className="featured-products-price">
                                    <span>₹10,199</span>
                                    <a href="#"
                                        className="featured-product-cart-button d-flex justify-content-center align-items-center">
                                        <img src={cart} className="img-fluid featured-products-cart" alt='Cart' />
                                    </a>
                                </div>
                                <div className="featured-products-footer-info">Many sizes available</div>
                            </div>
                        </div>
                    </div>

                    {/* Product 5 */}
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="card featured-card">
                            <div className="card-header">
                                <img src={Real_Madrid_Home_Shirt_2025_26}
                                    className="img-fluid featured-products-image rounded-4" alt="Real Madrid Home Shirt" />
                                <div className="product_special_note">
                                    <span>Authentic</span>
                                </div>
                                <a href="#"
                                    className="featured-product-wishlist-button d-flex justify-content-center align-items-center">
                                    <span><img src={Wishlist} className="img-fluid featured-product-wishlist" alt="Wishlist" /></span>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="featured-products-name">Real Madrid Home Shirt 2025/26</h4>
                            </div>
                            <div className="card-footer">
                                <div className="featured-products-price">
                                    <span>₹7,599</span>
                                    <a href="#"
                                        className="featured-product-cart-button d-flex justify-content-center align-items-center">
                                        <img src={cart} className="img-fluid featured-products-cart" alt='Cart' />
                                    </a>
                                </div>
                                <div className="featured-products-footer-info">Many sizes available</div>
                            </div>
                        </div>
                    </div>

                    {/* Product 6 */}
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="card featured-card">
                            <div className="card-header">
                                <img src={Brazil_Away_Shirt_Wolrd_Cup_2026}
                                    className="img-fluid featured-products-image rounded-4" alt="Brazil Away Shirt" />
                                <div className="product_special_note">
                                    <span>Authentic</span>
                                </div>
                                <a href="#"
                                    className="featured-product-wishlist-button d-flex justify-content-center align-items-center">
                                    <span><img src={Wishlist} className="img-fluid featured-product-wishlist" alt="Wishlist" /></span>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="featured-products-name">Brazil Away Shirt World Cup 2026</h4>
                            </div>
                            <div className="card-footer">
                                <div className="featured-products-price">
                                    <span>₹11,799</span>
                                    <a href="#"
                                        className="featured-product-cart-button d-flex justify-content-center align-items-center">
                                        <img src={cart} className="img-fluid featured-products-cart" alt='Cart' />
                                    </a>
                                </div>
                                <div className="featured-products-footer-info">Many sizes available</div>
                            </div>
                        </div>
                    </div>

                    {/* Product 7 */}
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="card featured-card">
                            <div className="card-header">
                                <img src={Paris_Saint_German_Away_Shirt_2025_26}
                                    className="img-fluid featured-products-image rounded-4" alt="PSG Away Shirt" />
                                <a href="#"
                                    className="featured-product-wishlist-button d-flex justify-content-center align-items-center">
                                    <span><img src={Wishlist} className="img-fluid featured-product-wishlist" alt="Wishlist" /></span>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="featured-products-name">Paris Saint Germain Away Shirt 2025-26</h4>
                            </div>
                            <div className="card-footer">
                                <div className="featured-products-price">
                                    <span>₹6,499</span>
                                    <a href="#"
                                        className="featured-product-cart-button d-flex justify-content-center align-items-center">
                                        <img src={cart} className="img-fluid featured-products-cart" alt='Cart' />
                                    </a>
                                </div>
                                <div className="featured-products-footer-info">Many sizes available</div>
                            </div>
                        </div>
                    </div>

                    {/* Product 8 */}
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="card featured-card">
                            <div className="card-header">
                                <img src={Nike_Football_Academy_T90_White_Black_Red_Black}
                                    className="img-fluid featured-products-image rounded-4" alt="Nike Football Academy" />
                                <a href="#"
                                    className="featured-product-wishlist-button d-flex justify-content-center align-items-center">
                                    <span><img src={Wishlist} className="img-fluid featured-product-wishlist" alt="Wishlist" /></span>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="featured-products-name">Nike Football Academy T90 - White/Black/Red</h4>
                            </div>
                            <div className="card-footer">
                                <div className="featured-products-price">
                                    <span>₹1,399</span>
                                    <a href="#"
                                        className="featured-product-cart-button d-flex justify-content-center align-items-center">
                                        <img src={cart} className="img-fluid featured-products-cart" alt='Cart' />
                                    </a>
                                </div>
                                <div className="featured-products-footer-info">&nbsp;</div>
                            </div>
                        </div>
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
