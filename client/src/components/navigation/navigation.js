import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation () {
    return (
        <div>
           <Link to="/">HOME</Link>
           <Link to="/about">ABOUT</Link>
           <Link to="/portfolio">PORTFOLIO</Link>
           <Link to="/project">PROJECTS</Link>
           <Link to="/contact">CONTACT</Link>
           <Link to="/footer">FOOTER</Link>
        </div>
    );
}