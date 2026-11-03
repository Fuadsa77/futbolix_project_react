import React from 'react'
import './New.css'

export default function News() {
    return (
        <>
            <div className="container-fluid newsletter-section d-flex justify-content-start justify-content-md-center flex-column py-md-5">
                <h2 className="newsletter-heading">Subscribe for Updates</h2>
                <h3 className="newsletter-sub-heading">Get latest deals and new arrivals</h3>
                <div className="newsletter-input-group mt-2 mt-md-5">
                    <input type="email" name="newsletter-email" placeholder="JohnDoe@email.com" required
                        className="newsletter-email-input "/>
                        <label for="newsletter-email" className="newsletter-input-group-label">Email</label>
                        <button className="btn newsletter-subcribe-button my-3">Subscribe</button>
                </div>
            </div>
        </>
    )
}
