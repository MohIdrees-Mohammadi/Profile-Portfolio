import React from 'react'
import { FaLaptop } from "react-icons/fa6";
import { FaPenFancy } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaBrush } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";

import "./services.css"
const Services = () => {
  return (
    <section id='services' class="about-section back">
        <h3>Services</h3>
        <h2>Services <span>that I can provide for you</span></h2>
        <div class="grid-system">


            <div class="box">
                <div class="three-corner-radius">
                <FaLaptop  className="react-icon" />
                   
                </div>
                <h4 class="sub-title">Web Design</h4>
                <p class="black">By understanding your needs and goals, I translate those into wireframes and mockups by blending artistic vision with technical skills to craft user-friendly and visually appealing online experiences</p>
            </div>

            <div class="box">
                <div class="three-corner-radius">
                <FaPenFancy  className="react-icon" />
                </div>
                <h4 class="sub-title">Video Editing</h4>
                <p>By understanding of visual composition, color theory, and typography I can create for you engaging title cards, design animated transitions, or choose appropriate background music to match the video's tone</p>
            </div>

            <div class="box">
                <div class="three-corner-radius">
                <FaCode  className="react-icon" />
                </div>
                <h4 class="sub-title">Web Design</h4>
                <p>By understanding your needs and goals, I translate those into wireframes and mockups by blending artistic vision with technical skills to craft user-friendly and visually appealing online experiences</p>
            </div>


            <div class="box">
                <div class="three-corner-radius">
                <FaBrush  className="react-icon" />
                </div>
                <h4 class="sub-title">Graphic Design</h4>
                <p>With the goal to create compelling visual elements for websites, I can design logos, icons, illustrations, and other visual assets that enhance the website's branding and aesthetic appeal</p>
            </div>

            <div class="box">
                <div class="three-corner-radius">
                <FaBullhorn  className="react-icon" />
                </div>
                <h4 class="sub-title">Digital Marketing</h4>
                <p>n digital marketing, I play a vital role for your website, by enhancing visual aesthetics, user experience, SEO, responsive design and mainly conversion optimization</p>
            </div>

            <div class="box">
                <div class="three-corner-radius">
                <FaMobile  className="react-icon" />
                </div>
                <h4 class="sub-title">Android Development</h4>
                <p>I can create visually appealing and intuitive Android app interfaces, by designing app layouts, navigation menus, buttons and icons, ensuring a cohesive and user-friendly experience</p>
            </div>




        </div>
       
    </section>
  )
}

export default Services
