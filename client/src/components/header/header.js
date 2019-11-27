import React from 'react';
// import Particles from 'react-particles-js';
import { HeaderStyle } from './styles'

export default function Header () {
    return (
        <HeaderStyle id={'header'}>
            <div>
                <p>Hello, 
                    <span>I'm Mariam Adedeji.</span>
                </p>
                <p>I'm a full stack web developer.</p>
                <div> View my work</div>
            </div>

            
        </HeaderStyle>
    );
}