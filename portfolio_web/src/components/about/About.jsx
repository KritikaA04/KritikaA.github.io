import React from 'react'
import './about.css'
import ME from '../../assets/KritikaAg.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
               <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
               <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

            <article className='about__card'>
               <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>100+ in India</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum nam voluptas totam neque, libero distinctio vel repudiandae quisquam impedit modi nemo! Quisquam enim iure, amet reprehenderit praesentium est adipisci!  
          </p>

          <a href="#contact" className='btn btn-primary'>Want to know more? Connect with me!</a>
        </div>
      </div>
    </section>
  )
}

export default About