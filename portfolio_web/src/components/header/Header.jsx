import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/KritikaAg.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey There! I'm</h5>
        <h1>Kritika Agrawal</h1>
        <h5 className="text-light">Full Stack Developer(Fresher)</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header