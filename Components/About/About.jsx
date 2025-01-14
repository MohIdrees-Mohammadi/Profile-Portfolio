import React from 'react'

import "./about.css"


const About = () => {
  return (
    <section id='about' class="about-section">
        <h3>About</h3>
        <h2>Personal <span>Details</span></h2>
        <div class="about-sub-container">
            <div class="sub-container-left">
                <h5>I'm <span>Mark Parker</span> and I'm a Web Designer</h5>
                <p>I am a passionate web designer with a love for creating beautiful and functional websites. I enjoy working with HTML, CSS, and JavaScript to bring ideas to life and enhance user experiences. In my free time, I like to explore new design trends and work on personal projects that challenge my creativity</p>
                <div class="about-sub-container">

                    <div class="sub-container-left">
                        <div>

                            <div class="about-details">
                                {/* <img height="30px" src="./tele.png" alt=""> */}
                                <h6 class="bold">Date of Birth:</h6>
                                <h6 class="gray"> 9 November 1990</h6>
                            </div>

                            <div class="about-details">
                                {/* <img height="30px" src="./tele.png" alt=""> */}
                                <h6 class="bold">Date of Birth:</h6>
                                <h6 class="gray"> 9 November 1990</h6>
                            </div>

                            <div class="about-details">
                                {/* <img height="30px" src="./tele.png" alt=""> */}
                                <h6 class="bold">Date of Birth:</h6>
                                <h6 class="gray"> 9 November 1990</h6>
                            </div>
                       
                            
                        </div>
                    </div>



                    <div class="sub-container-right">
                        <div>

                            <div class="about-details">
                                {/* <img height="30px" src="./tele.png" alt=""> */}
                                <h6 class="bold">Date of Birth:</h6>
                                <h6 class="gray"> 9 November 1990</h6>
                            </div>

                            <div class="about-details">
                                {/* <img height="30px" src="./tele.png" alt=""> */}
                                <h6 class="bold">Date of Birth:</h6>
                                <h6 class="gray"> 9 November 1990</h6>
                            </div>

                            <div class="about-details">
                                {/* <img height="30px" src="./tele.png" alt=""> */}
                                <h6 class="bold">Date of Birth:</h6>
                                <h6 class="gray"> 9 November 1990</h6>
                            </div>
                       
                            
                        </div>
                    </div>





                </div>
                <button class="primary-button">Hire Me</button>
            </div>
            <div class="sub-container-right">
                <div>
                    <div class="skill-name">
                        <h6>C++</h6>
                        <h6>95%</h6>
                    </div>
                    <progress value="95" max="100"></progress>

                    <div class="skill-name">
                        <h6>java</h6>
                        <h6>65%</h6>
                    </div>
                    <progress value="65" max="100"></progress>

                    <div class="skill-name">
                        <h6>Python</h6>
                        <h6>75%</h6>
                    </div>
                    <progress value="75" max="100"></progress>

                    <div class="skill-name">
                        <h6>Python</h6>
                        <h6>75%</h6>
                    </div>
                    <progress value="75" max="100"></progress>

                    <div class="skill-name">
                        <h6>Python</h6>
                        <h6>75%</h6>
                    </div>
                    <progress value="75" max="100"></progress>
                </div>
            </div>
       
        </div>
       
    </section>
  )
}

export default About
