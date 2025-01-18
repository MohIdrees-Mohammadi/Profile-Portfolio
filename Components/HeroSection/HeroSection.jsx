import React from 'react'

import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";


import "./heroSection.css"
import profile from "../../src/assets/Images/profile-pic.png"
const HeroSection = () => {
  return (
    <section class="home-section" id="home">
        <div className='home-left-container'>
           <div style={{display: 'flex', flexDirection: 'column'}}>
           <span>HELLO, I'M</span>
            <h1>MARK PARKER</h1>
            <p>A freelancer UI Designer & Web Developer</p>
            <div class="button-container">
                <button class="primary-button">View My Work</button>
            </div>
           </div>
        </div>



        <div className='home-right-container'>
            <img  src={profile} alt="" />
        </div>

        <div class="social-container">
            <div class="line"></div>
            <div class="socials">
                <div class="over-background">
                <CiFacebook size={30} className='icon' />
                </div>
                <div class="over-background">
                <CiInstagram size={29} className='icon' />
                </div>
                <div class="over-background">
                <FiGithub size={25 } className='icon' />
                </div>
                <div class="over-background">
                <CiLinkedin size={32} className='icon' />
                </div>
                
            </div>
        </div>
     
    </section>
  )
}

export default HeroSection
