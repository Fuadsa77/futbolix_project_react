import React from 'react'
import './Review.css'
import Fillstar from "../../Icons/star-fill-rating.png"
import Outlinestar from "../../Icons/star-outline-rating.png"
import Previous from "../../Icons/Previous.png"
import Next from "../../Icons/Next.png"
import James_walker from "../../Images/Review-James-Walker-profile.jpg"
import Ethan_brooks from "../../Images/Review-Ethan-Brooks-profile.jpg"
import Benn_beckman from "../../Images/Review-Benn-Beckman-profile.jpg"
import Daniel_carter from "../../Images/Review-Daniel-Carter-profile.jpg"
import Olivia_harris from "../../Images/Review-Olivia-Harris-profile.jpg"
import Emma_collins from "../../Images/Review-Emma-Collins-profile.jpg"



export default function Review() {
    return (
        <>
            <div className="container-fluid reviews-section py-5">
                <h2 className="reviews-heading pb-4">Reviews</h2>

                <div className="d-none d-lg-block">
                    {/* Carousel  */}
                    <div id="reviews-card-slider" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true"
                        data-bs-interval="3500" data-bs-pause="false">

                        {/* Indicators/dots  */}
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#reviews-card-slider" data-bs-slide-to="0"
                                className="active"></button>
                            <button type="button" data-bs-target="#reviews-card-slider" data-bs-slide-to="1"></button>
                        </div>


                        {/*  Slideshow/Carousel  */}
                        <div className="carousel-inner">
                            {/*  slide 1  */}
                            <div className="carousel-item active">
                                <div className="row g-3">
                                    {/*  review 1 */}
                                    <div className="col-4   d-flex review-card-column">
                                        <div className="card reviews-card">
                                            <div className="card-header">
                                                <span><img src={James_walker}
                                                    className="img-fluid reviewer-photo" /></span>
                                                <h3 className="reviewer-name">James Walker</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className=" text-center">
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Outlinestar}
                                                        className="img-fluid reviews-star" /></span>
                                                </div>
                                                <h4 className="review-content">“Absolutely loved the quality of the football boots.
                                                    The grip and comfort are top-notch. Delivery was also super fast. Will
                                                    definitely shop again!”</h4>
                                            </div>
                                        </div>
                                    </div>

                                    {/* review 2 */}
                                    <div className="col-4   d-flex">
                                        <div className="card reviews-card">
                                            <div className="card-header">
                                                <span><img src={Benn_beckman}
                                                    className="img-fluid reviewer-photo" /></span>
                                                <h3 className="reviewer-name">Benn Beckman</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className=" text-center">
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                </div>
                                                <h4 className="review-content">“The jerseys look exactly like the originals. Fabric
                                                    feels premium and breathable. Great experience overall.”</h4>
                                            </div>
                                        </div>
                                    </div>

                                    {/* review 3 */}
                                    <div className="col-4   d-flex">
                                        <div className="card reviews-card">
                                            <div className="card-header">
                                                <span><img src={Daniel_carter}
                                                    className="img-fluid reviewer-photo" /></span>
                                                <h3 className="reviewer-name">Daniel Carter</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className=" text-center">
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                </div>
                                                <h4 className="review-content">“Bought a football and gloves from here — both are
                                                    excellent quality. Pricing is reasonable compared to other sites.”</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* slide 2 */}
                            <div className="carousel-item">
                                <div className="row g-3">
                                    {/* review 4 */}
                                    <div className="col-4   d-flex">
                                        <div className="card reviews-card">
                                            <div className="card-header">
                                                <span><img src={Olivia_harris}
                                                    className="img-fluid reviewer-photo" /></span>
                                                <h3 className="reviewer-name">Olivia Harris</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className=" text-center">
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                </div>
                                                <h4 className="review-content">“Really happy with my purchase! The jersey fits
                                                    perfectly and the material is very comfortable. Highly recommend.”</h4>
                                            </div>
                                        </div>
                                    </div>

                                    {/* review 5 */}
                                    <div className="col-4   d-flex">
                                        <div className="card reviews-card">
                                            <div className="card-header">
                                                <span><img src={Ethan_brooks}
                                                    className="img-fluid reviewer-photo" /></span>
                                                <h3 className="reviewer-name">Ethan Brooks</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className=" text-center">
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Outlinestar}
                                                        className="img-fluid reviews-star" /></span>
                                                </div>
                                                <h4 className="review-content">“Nice collection of products, especially club
                                                    jerseys. The website UI is smooth and easy to navigate.”</h4>
                                            </div>
                                        </div>
                                    </div>

                                    {/* review 6 */}
                                    <div className="col-4   d-flex">
                                        <div className="card reviews-card">
                                            <div className="card-header">
                                                <span><img src={Emma_collins}
                                                    className="img-fluid reviewer-photo" /></span>
                                                <h3 className="reviewer-name">Emma Collins</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Fillstar}
                                                        className="img-fluid reviews-star" /></span>
                                                    <span><img src={Outlinestar}
                                                        className="img-fluid reviews-star" /></span>
                                                </div>
                                                <h4 className="review-content">“Loved the design and packaging. Everything feels
                                                    premium. Customer support was also very helpful.”</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Left and right Controls/icons  */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#reviews-card-slider"
                            data-bs-slide="prev">
                            <span className=""><img src={Previous} className="img-fluid" /></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#reviews-card-slider"
                            data-bs-slide="next">
                            <span className=""><img src={Next} className="img-fluid" /></span>
                        </button>

                    </div>
                </div>

                {/* Mobile View */}
                <div className="d-block d-lg-none">
                    <div className="row g-3">
                        {/* review 1 */}
                        <div className="col-6 col-sm-4">
                            <div className="card reviews-card">
                                <div className="card-header">
                                    <span><img src={James_walker}
                                        className="img-fluid reviewer-photo" /></span>
                                    <h3 className="reviewer-name">James Walker</h3>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Outlinestar} className="img-fluid reviews-star" /></span>
                                    </div>
                                    <h4 className="review-content">“Absolutely loved the quality of the football boots. The grip and
                                        comfort are top-notch. Delivery was also super fast. Will definitely shop again!”</h4>
                                </div>
                            </div>
                        </div>

                        {/* review 2 */}
                        <div className=" col-6 col-sm-4">
                            <div className="card reviews-card">
                                <div className="card-header">
                                    <span><img src={Benn_beckman}
                                        className="img-fluid reviewer-photo" /></span>
                                    <h3 className="reviewer-name">Benn Beckman</h3>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                    </div>
                                    <h4 className="review-content">“The jerseys look exactly like the originals. Fabric feels
                                        premium and breathable. Great experience overall.”</h4>
                                </div>
                            </div>
                        </div>

                        {/* review 3 */}
                        <div className="col-6 col-sm-4">
                            <div className="card reviews-card">
                                <div className="card-header">
                                    <span><img src={Olivia_harris}
                                        className="img-fluid reviewer-photo" /></span>
                                    <h3 className="reviewer-name">Olivia Harris</h3>
                                </div>
                                <div className="card-body">
                                    <div className=" text-center">
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar} className="img-fluid reviews-star" /></span>
                                    </div>
                                    <h4 className="review-content">“Really happy with my purchase! The jersey fits perfectly and the
                                        material is very comfortable. Highly recommend.”</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-block d-sm-none">
                            <div className="card reviews-card">
                                <div className="card-header">
                                    <span><img src={Daniel_carter}
                                        className="img-fluid reviewer-photo" /></span>
                                    <h3 className="reviewer-name">Daniel Carter</h3>
                                </div>
                                <div className="card-body">
                                    <div className=" text-center">
                                        <span><img src={Fillstar}
                                            className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar}
                                            className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar}
                                            className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar}
                                            className="img-fluid reviews-star" /></span>
                                        <span><img src={Fillstar}
                                            className="img-fluid reviews-star" /></span>
                                    </div>
                                    <h4 className="review-content">“Bought a football and gloves from here — both are
                                        excellent quality. Pricing is reasonable compared to other sites.”</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
