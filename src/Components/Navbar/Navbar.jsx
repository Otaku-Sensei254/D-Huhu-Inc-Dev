import React from 'react'
import Logo from '../Images2/transparent2.png'
import './Navbar.css'

 

function Navbar () {
  
  

  return (
    <>
      
    <div className="header">

        <img src={Logo} className="Logo"/>
        
      </div>
        
        <div className="navbar">
        <div className="links">
            <a href="Home">Home</a>
            <a  href="About">About</a>
            <a href="Skills">Skills</a>
            <a href="Contact">Contact</a>
            <a className="Hire-btn" href="Hire">Hire Me</a>
          </div>

          
        
            

            
        
       
        
        
       
        
    </div>
    
    
    </>
  )
}

export default Navbar