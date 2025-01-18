import React from 'react'
import "./portfolio.css"
import { port_1, port_2, port_3, port_4, port_5, port_6 } from '../../src/assets/Images/portfolio-images'

const Portfolio = () => {
  return (
    <section id='portfolio' class="about-section">
    <h3>Portfolio</h3>
    <h2>Our latest <span>WORK</span></h2>
    <div style={{display: 'flex', gap: '0.4rem'}} >
        <button class="cutome-button active">All</button>
        <button class="cutome-button">Wordpress</button>
        <button class="cutome-button">Photoshop</button>
        <button class="cutome-button">Web design</button>
    </div>
    <div class="image-container">
 
      <div className="hover-card">
        <img
          src={port_1} 
          alt="protfolio"
          className="hover-card-image"
        />
        <div className="hover-card-overlay">
          <h3 className="hover-card-title">Card Title</h3>
          <div className="hover-card-buttons">
            <button className="hover-card-btn">Button 1</button>
            <button className="hover-card-btn">Button 2</button>
          </div>
        </div>
      </div>

      <div className="hover-card">
        <img
          src={port_2} 
          alt="protfolio"
          className="hover-card-image"
        />
        <div className="hover-card-overlay">
          <h3 className="hover-card-title">Card Title</h3>
          <div className="hover-card-buttons">
            <button className="hover-card-btn">Button 1</button>
            <button className="hover-card-btn">Button 2</button>
          </div>
        </div>
      </div>

      <div className="hover-card">
        <img
          src={port_3} 
          alt="protfolio"
          className="hover-card-image"
        />
        <div className="hover-card-overlay">
          <h3 className="hover-card-title">Card Title</h3>
          <div className="hover-card-buttons">
            <button className="hover-card-btn">Button 1</button>
            <button className="hover-card-btn">Button 2</button>
          </div>
        </div>
      </div>
       
      <div className="hover-card">
        <img
          src={port_4} 
          alt="protfolio"
          className="hover-card-image"
        />
        <div className="hover-card-overlay">
          <h3 className="hover-card-title">Card Title</h3>
          <div className="hover-card-buttons">
            <button className="hover-card-btn">Button 1</button>
            <button className="hover-card-btn">Button 2</button>
          </div>
        </div>
      </div>

      <div className="hover-card">
        <img
          src={port_5} 
          alt="protfolio"
          className="hover-card-image"
        />
        <div className="hover-card-overlay">
          <h3 className="hover-card-title">Card Title</h3>
          <div className="hover-card-buttons">
            <button className="hover-card-btn">Button 1</button>
            <button className="hover-card-btn">Button 2</button>
          </div>
        </div>
      </div>

      <div className="hover-card">
        <img
          src={port_6} 
          alt="protfolio"
          className="hover-card-image"
        />
        <div className="hover-card-overlay">
          <h3 className="hover-card-title">Card Title</h3>
          <div className="hover-card-buttons">
            <button className="hover-card-btn">Button 1</button>
            <button className="hover-card-btn">Button 2</button>
          </div>
        </div>
      </div>

    </div>
 </section>
  )
}

export default Portfolio
