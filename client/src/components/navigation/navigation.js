import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation () {

    function navigate(elementId){
        let offsetTop  = document.getElementById(elementId).offsetTop;
        window.scrollTo({
          top: offsetTop-100, 
          behavior: "smooth"
        });
      }

    return (
        <div>
           <Link onClick = {() => navigate('header')} to="/">HOME</Link>
           <Link onClick = {() => navigate('about')} to="/about">ABOUT</Link>
           <Link onClick = {() => navigate('portfolio')}  to="/portfolio">PORTFOLIO</Link>
           <Link onClick = {() => navigate('project')} to="/project">PROJECTS</Link>
           <Link onClick = {() => navigate('contact')} to="/contact">CONTACT</Link>
        </div>
    );
}