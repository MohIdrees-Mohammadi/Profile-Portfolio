import React from 'react'

import "./header.css"

const Header = () => {
  return (
    <header>
        <h3>Portfolio</h3>
        <nav>
           <ul>
            
            <a href="#home">
                <li>Home</li>
            </a>
            <a href="#about">
                <li>About</li>
            </a>
            <a href="#services">
                <li>Services</li>
            </a>
            
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>Contact</li>
           </ul> 
        </nav>
      
    </header>
  )
}

export default Header
