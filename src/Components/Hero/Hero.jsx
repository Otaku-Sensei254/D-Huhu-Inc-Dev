import React from 'react'
import './Hero.css'
import myself from '../Images/me.jpg'
import html from '../Images/html2.png'
import Js from '../Images/Js2.png'
import react from '../Images/react4.png'
import Css from '../Images/CSS4.png'
const Hero = () => {
  return (
   <section className="hero-container">
    < div className="hero-content">
        <h2>Hi there, I am Dennis Huhu.
            Frontend Developer</h2>
        <p>Creative Website Developer with objectives
             to making and providing optimum and purposeful 
             services that you need and works for you.</p>
    </div>
    <div className="hero-img">
    </div>
      <div className="page-icons">
    
          <img src={myself}alt="" className="myself"/>
          <div className="Links">
            <div className="tech-icons">
            <img src={html} alt="" className="html-logo"/>
            </div>
            <div className="tech-icons">
            <img src={Js} alt="" className="js-logo"/>
            </div>
            <div className="tech-icons">
            <img src={react} alt="" className="react-logo"/>
            </div>
            <div className="tech-icons">
            <img src={Css} alt="" className="css-logo"/>
          </div>
          </div>

      </div>
      
   </section>
  )
}

export default Hero