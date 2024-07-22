import React, { useState }  from 'react';
import './styles.css'; // Path to your CSS file 


const Header =() =>{

    function scrollAbout() {
        window.scrollTo(0, 130);
    }  

    function scrollExperience() {
        window.scrollTo(0, 400);
    } 
    
    function scrollProjects() {
        window.scrollTo(50, 1000);
    }

    return(
        
        <div class="button-container">

            <button className="button" onClick={scrollAbout}>About</button>
            <button className="button" onClick={scrollExperience}>Experience</button>
            <button className="button" onClick={scrollProjects}>Projects</button>
            
            
        </div>
        
    )
}

export default Header;