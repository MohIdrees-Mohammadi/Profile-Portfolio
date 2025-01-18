import React from 'react'

import "./header.css"

const Header = () => {
  return (
    <header>
      <h2>Portfolio</h2>
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
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>

        </ul>
      </nav>

    </header>
  )
}

export default Header
