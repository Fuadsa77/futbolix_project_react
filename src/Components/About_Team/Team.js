import React from 'react'
import './Team.css'
import Tom_alex from '../../Images/Team-Tom-Alex-profile.jpg'
import Daniel_cruz from '../../Images/Team-Daniel-Cruz-Profile.jpg'
import Joshua_mathew from '../../Images/Team-Joseua-Mathew-Profile.jpg'
import Marco_silva from '../../Images/Team-Marco-Silva-Profile.jpg'

export default function Team() {
  return (
    <>
    <div className="container-fluid team-section text-center py-5">
        <h2 className="team-heading pb-3 pb-md-4">Our Team</h2>
        <div className="row">

            {/*  Founder & Creative Director  */}
            <div className="col-12 col-md-6 col-lg-3 text-center mt-4 mt-lg-0">
                <div className="team-tom-alex-profile">
                    <img src={Tom_alex} className="team-profile img-fluid"/>
                    <div className="team-profile-role d-flex justify-content-center align-items-center flex-column pt-2">
                        <h3 className="team-profile-name">Tom Alex</h3>
                        <p>Founder & Creative Director</p>
                    </div>
                </div>  
            </div>

            {/*  UI/UX Designer */}
            <div className="col-12 col-md-6 col-lg-3 text-center mt-4 mt-lg-0 ">
                <div className="team-daniel-cruz-profile">
                    <img src={Daniel_cruz} className="team-profile img-fluid"/>
                    <div className="team-profile-role d-flex justify-content-center align-items-center flex-column pt-2">
                        <h3 className="team-profile-name">Daniel Cruz</h3>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
            </div>

            {/* Frontend Developer  */}
            <div className="col-12 col-md-6 col-lg-3 text-center mt-4 mt-lg-0">
                <div className="team-joseua-mathew-profile">
                   <img src={Joshua_mathew} className="team-profile img-fluid"/>
                    <div className="team-profile-role d-flex justify-content-center align-items-center flex-column pt-2">
                        <h3 className="team-profile-name">Joseua Mathew</h3>
                        <p>Frontend Developer</p>
                    </div> 
                </div>
            </div>

            {/*  Product Specialist */}
            <div className="col-12 col-md-6 col-lg-3 text-center mt-4 mt-lg-0">
                <div className="team-marco-silva-profile">
                    <img src={Marco_silva} className="team-profile img-fluid"/>
                    <div className="team-profile-role d-flex justify-content-center align-items-center flex-column pt-2">
                        <h3 className="team-profile-name">Marco Silva</h3>
                        <p>Product Specialist</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
