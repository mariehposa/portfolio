import React from 'react';
import facebook from './logo/001-facebook.png';
import twitter from './logo/002-twitter.png';
import linkedin from './logo/003-linkedin.png';
import gmail from './logo/004-gmail.png';
import github from './logo/005-github.png';

export default function Footer() {
    return (
        <div>
            <a href="mariamadedeji.work@gmail.com" title="gmail profile">
                <img src={gmail} alt="gmail logo"/>
            </a>
            <a href="https://github.com/mariehposa" title="github profile">
                <img src={github} alt="github logo"/>
            </a>
            <a href="https://linkedin.com/in/adedeji-mariam" title="linkedin profile">
                <img src={linkedin} alt="linkedin logo"/>
            </a>
            <a href="https://twitter.com/Mariehposah?s=09" title="twitter profile">
                <img src={twitter} alt="twitter logo"/>
            </a>
            <a href="https://www.facebook.com/adedeji.mariam.3" title="facebook profile">
                <img src={facebook} alt="facebook logo"/>
            </a>
            <p> COPYRIGHT © 2019 MARIAM ADEDEJI </p>
        </div>
    );
}
