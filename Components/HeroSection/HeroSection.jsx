import React from 'react'

import "./heroSection.css"
import profile from "../../src/assets/Images/profile-pic.png"
const HeroSection = () => {
  return (
    <section class="home-section" id="home">
        <div class="test">
            <span>HELLO, I'M</span>
            <h1>MARK PARKER</h1>
            <p>A freelancer UI Designer & Web Developer</p>
            <div class="button-container">
                <button class="primary-button">View My Work</button>
            </div>
        </div>



        <div>
            <img  src={profile} alt="" />
        </div>

        <div class="social-container">
            <div class="line"></div>
            <div class="socials">
                <div class="over-background">
                    {/* <img height="30px" src="./fb.png" alt=""> */}
                </div>
                <div class="over-background">
                    {/* <img height="30px" src="./fb.png" alt=""> */}
                </div>
                <div class="over-background">
                    {/* <img height="30px" src="./fb.png" alt=""> */}
                </div>
                <div class="over-background">
                    {/* <img height="30px" src="./fb.png" alt=""> */}
                </div>
                
            </div>
        </div>
     
    </section>
  )
}

export default HeroSection
