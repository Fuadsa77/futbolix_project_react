import React from 'react'
import './Social.css'
import facebook from '../../Icons/facebook.png'
import twitter from '../../Icons/twitter.png'
import instagram from '../../Icons/instagram.png'
import next from '../../Icons/Next.png'

export default function Social() {
    return (
        <>
            <div className="conatiner-fluid social-section py-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className="follow-us">FOLLOW US HERE</p>
                        <a href="#" className="text-decoration-none d-flex align-items-center py-3">
                            <img src={facebook} className="img-fluid social-icon"/>
                                <h3 className="social-heading px-3">Facebook </h3>
                                <img src={next} className="img-fluid social-next-icon d-none d-sm-block" />
                        </a>

                        <a href="#" className="text-decoration-none d-flex align-items-center py-3">
                            <img src={twitter} className="img-fluid social-icon"/>
                                <h3 className="social-heading px-3">Twitter</h3>
                                <img src={next} className="img-fluid social-next-icon d-none d-sm-block" />
                        </a>

                        <a href="#" className="text-decoration-none d-flex align-items-center py-3">
                            <img src={instagram} className="img-fluid social-icon"/>
                                <h3 className="social-heading px-3">Instagram </h3>
                                <img src={next} className="img-fluid social-next-icon d-none d-sm-block" />
                        </a>
                    </div>

                    <div className="store-details col-12 col-md-6 d-flex align-items-center flex-column">
                        <h3 className="store-details-heading pb-3">STORES</h3>
                        <p>
                            <span className="store-location mx-2">Kochi</span>
                            <span className="store-location mx-2">Kozhikode</span>
                            <span className="store-location mx-2">Kannur</span>
                        </p>
                        <h5 className="store-details-sub-heading">Opening Hours</h5>
                        <div className="store-times d-flex align-items-start flex-column">
                            <p className="store-open-timings mt-3 pb-2">
                                <span className="week-day text-light pe-3">Mon-Fri</span><span className="store-time">9.00 am - 8.00 pm</span>
                            </p>
                            <p className="store-open-timings pb-2">
                                <span className="week-day text-light pe-5">Sat</span><span className="store-time">9.00 am - 6.00 pm</span>
                            </p>
                            <p className="store-open-timings pb-2">
                                <span className="week-day text-light pe-5">Sun</span><span className="store-time text-danger">Closed</span>
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}
