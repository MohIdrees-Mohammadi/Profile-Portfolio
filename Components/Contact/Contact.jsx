import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <section id='contact' class="about-section">
    <h3>Contact Us</h3>
    <h2>GET <span>IN TOUCH</span></h2>


    <div class="contact-container">
        <div class="left-contact">Left</div>
        <div class="right-contact">
           <div class="input-container">
            <input class="input-width" type="text" placeholder="Name" />
            <input class="input-width" type="email" placeholder="Email" />
           </div>
            <input type="number" placeholder="Phone No" />
            <input type="text" placeholder="Subject" />
            <textarea rows="6" name="textarea" id="textarea" placeholder="Your Message"></textarea>
            <button class="primary-button custom-width">Send Message</button>
        </div>
    </div>


 </section>
  )
}

export default Contact
