import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation () {

    function navigate(elementId){
        let offsetTop  = document.getElementById(elementId).offsetTop;
        var right = document.getElementById("#right");
        window.scrollTo({
          top: offsetTop-100, 
          behavior: "smooth"
        });
      }

    return (
        <div>
           <Link to="/">HOME</Link>
           <Link to="/about">ABOUT</Link>
           <Link onClick = {() => navigate('portfolio')}  to="/portfolio">PORTFOLIO</Link>
           <Link to="/project">PROJECTS</Link>
           <Link to="/contact">CONTACT</Link>
           <Link to="/footer">FOOTER</Link>
        </div>
    );
}