import React from 'react'
import './Choose.css'

export default function Choose() {
    return (
        <>
            <div class="container-fluid choose-section py-5">
                <h2 class="choose-heading mb-5">Why Choose Futbolix?</h2>
                <div class="d-flex justify-content-end mt-4">
                    <div class="choose-image"></div>
                    <div class="choose-contents d-flex justify-content-center align-items-end flex-column">
                        <div class="choose-option d-flex align-items-center flex-column text-center">
                            <h3 class="choose-sub-heading">Premium Quality</h3>
                        </div>

                        <div class="choose-option d-flex align-items-center flex-column text-center">
                            <h3 class="choose-sub-heading">Unique Collections</h3>
                        </div>

                        <div class="choose-option d-flex align-items-center flex-column text-center ">
                            <h3 class="choose-sub-heading">Football-Focused</h3>
                        </div>

                        <div class="choose-option d-flex align-items-center flex-column text-center">
                            <h3 class="choose-sub-heading">Style & Performance</h3>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4 hr-blend" />
        </>
    )
}
