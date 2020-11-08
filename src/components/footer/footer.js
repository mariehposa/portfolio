import React from 'react';
import dev from './logo/001-dev.png';
// import twitter from './logo/002-twitter.png';
import linkedin from './logo/003-linkedin.png';
import gmail from './logo/004-gmail.png';
import github from './logo/005-github.png';
import hackerrank from './logo/006-hackerrank.png';
import { StyledAll, StyledDiv, StyledA } from './styles';

export default function Footer() {
    return (
        <StyledAll>
            <StyledDiv>
            <StyledA  title="gmail profile" href="mailto:mariamadedeji.work@gmail.com">
                <img src={gmail} alt="gmail logo" />
            </StyledA>
            <StyledA href="https://github.com/mariehposa" title="github profile">
                <img src={github} alt="github logo"/>
            </StyledA>
            <StyledA href="https://linkedin.com/in/adedeji-mariam" title="linkedin profile">
                <img src={linkedin} alt="linkedin logo"/>
            </StyledA>
            <StyledA href="https://twitter.com/Mariehposah?s=09" title="twitter profile">
                <img src={twitter} alt="twitter logo"/>
            </StyledA>
            <StyledA href="https://dev.to/mariehposa" title="dev profile">
                <img src={dev} alt="dev logo"/>
            </StyledA>
            <StyledA href="https://www.hackerrank.com/mariehposa" title="hackerrank profile">
                <img src={hackerrank} alt="hackerrank logo"/>
            </StyledA>
            </StyledDiv>
            <p> MARIAM ADEDEJI <span> © 2019 </span></p>
        </StyledAll>
    );
}
