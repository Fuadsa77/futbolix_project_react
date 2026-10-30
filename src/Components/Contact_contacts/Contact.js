import React from 'react'
import './Contact.css'
import phone_icon from '../../Icons/phone-call.png'
import email_icon from '../../Icons/mail.png'
import location_icon from '../../Icons/location.png'
import send from '../../Icons/messages-send.png'

export default function Contact() {
    return (
        <>
            <div className="container-fluid contact-section py-5">
                <h2 className="contact-heading text-center pb-4">Contacts</h2>
                <div className="row align-items-stretch">


                    {/*  Contact Form  */}
                    <div className="col-12 col-lg-6">
                        <div className="contact-form py-3">
                            <form action="#" method="POST">
                                <div className="contact-input-group mt-3">
                                    <input type="text" name="Contact_Name" placeholder="eg : John Doe" required className="contact-form-input "/>
                                        <label className="contact-input-group-label">Name</label>
                                </div>
                                <div className="contact-input-group mt-3">
                                    <input type="email" name="Contact_Email" placeholder="eg : JohnDoe@email.com" required className="contact-form-input "/>
                                        <label className="contact-input-group-label">Email</label>
                                </div>
                                <div className="contact-input-group mt-3">
                                    <input type="text" name="Contact_Subject" placeholder="eg : Feedback" required className="contact-form-input "/>
                                        <label className="contact-input-group-label">Subject</label>
                                </div>
                                <div className="contact-input-group mt-3">
                                    <textarea rows="5" cols="25" name="Contact_Message" id="Conatct-form-message" placeholder="Type your message here..." required className="contact-form-input "></textarea>
                                    <label className="contact-input-group-label">Message</label>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn conatct-form-button my-3"><img src={send} className="conatct-form-button-image img-fluid" /></button>
                                </div>
                            </form>
                        </div>
                    </div>


                     {/* Contact Info  */}
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                        <div className="contact-info py-3 d-flex justify-content-center align-items-center flex-column">
                            <ul type="none">
                                <li className=" contact-info-group my-3">
                                    <h4><img src={email_icon} alt="" className="img-fluid contact-info-icon"/>Email</h4>
                                    <p>support@Futbolix.com</p>
                                </li>
                                <li className=" contact-info-group my-3">
                                    <h4><img src={phone_icon} alt="" className="img-fluid contact-info-icon"/>Phone</h4>
                                    <p>+91 98-1050-7576</p>
                                </li>
                                <li className="contact-info-group my-3">
                                    <h4><img src={location_icon} alt="" className="img-fluid contact-info-icon"/>Location</h4>
                                    <p>Futbolix,Near Kozhikode station</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
