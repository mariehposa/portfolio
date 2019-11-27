import React from "react";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import split from './images/splitTheBill.png'
import chef from './images/chefPortfolio.png'
import hairCare from './images/hairCare.png'
import rickMorty from './images/rickAndMorty.png'
import starwars from './images/starwars.png'
import essentialism from './images/essentialism.png'
import github from './images/github.png';

export default function Portfolio() {
  return (
    <div  id={'portfolio'}>
        <h3> PORTFOLIO </h3>
        <div>
            <Link to="/">ALL</Link>
            <Link to="/portfolio/html">HTML</Link>
            <Link to="/portfolio/react">REACT</Link>
            <Link to="/portfolio/redux">REDUX</Link>
            <Link to="/portfolio/node">NODE</Link>
        </div>
        <div>
            <Route exact path="/" component={All}  />
            <Route path="/portfolio/html" component={Html} />
            <Route path="/portfolio/react" component={EReact} />
            <Route path="/portfolio/redux" component={Redux} />
            <Route path="/portfolio/node" component={Node} />     
        </div>
    </div>
  );
}

function All(){
    return (
        <div>
            <Html /> <EReact/> <Redux/> <Node/>
        </div>
    )
}

export function Html () {
    return (
        <div>
            <Flippy flipOnHover={true} flipDirection="horizontal" style={{ width: "350px", height: "300px" }} >
                <FrontSide>
                    <img src={chef} alt="chef-portfolio" style={{ width: "320px", height: "280px" }} />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#175852" }}>
                    <h4>Chef Portfolio</h4>
                    <p>Html and Css</p>
                    <div>
                        <a href="/a">View site</a>
                        <a href="https://github.com/mariehposa" title="github profile">
                            <img src={github} alt="github logo"/>
                            <p>View on github</p>
                        </a>
                    </div>
                </BackSide>
            </Flippy>
        </div>
    );
}

export function EReact () {
    return (
        <div>
            <Flippy flipOnHover={true} flipDirection="horizontal" style={{ width: "350px", height: "300px" }} >
                <FrontSide>
                    <img src={starwars} alt="starwars" style={{ width: "320px", height: "280px" }} />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#175852" }}>
                    <h4>Starwars</h4>
                    <p>React and pure Javascript</p>
                    <div>
                        <a href="/a">View site</a>
                        <a href="https://github.com/mariehposa" title="github profile">
                            <img src={github} alt="github logo"/>
                            <p>View on github</p>
                        </a>
                    </div>
                </BackSide>
            </Flippy>

            <Flippy flipOnHover={true} flipDirection="horizontal" style={{ width: "350px", height: "300px" }} >
                <FrontSide>
                    <img src={rickMorty} alt="Rick and Morty" style={{ width: "320px", height: "280px" }} />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#175852" }}>
                    <h4>Rick & Morty</h4>
                    <p>React and pure Javascript</p>
                    <div>
                        <a href="/a">View site</a>
                        <a href="https://github.com/mariehposa" title="github profile">
                            <img src={github} alt="github logo"/>
                            <p>View on github</p>
                        </a>
                    </div>
                </BackSide>
            </Flippy>

            <Flippy flipOnHover={true} flipDirection="horizontal" style={{ width: "350px", height: "300px" }} >
                <FrontSide>
                    <img src={hairCare} alt="Hair Care" style={{ width: "320px", height: "280px" }} />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#175852" }}>
                    <h4>Hair Care</h4>
                    <p>React and pure Javascript</p>
                    <div>
                        <a href="/a">View site</a>
                        <a href="https://github.com/mariehposa" title="github profile">
                            <img src={github} alt="github logo"/>
                            <p>View on github</p>
                        </a>
                    </div>
                </BackSide>
            </Flippy>
        </div>
    );
}

export function Redux () {
    return (
        <div>
            <Flippy flipOnHover={true} flipDirection="horizontal" style={{ width: "350px", height: "300px" }} >
                <FrontSide>
                    <img src={split} alt="Split the Bill" style={{ width: "320px", height: "280px" }} />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#175852" }}>
                    <h4>Split the Bill</h4>
                    <p>React Redux</p>
                    <div>
                        <a href="/a">View site</a>
                        <a href="https://github.com/mariehposa" title="github profile">
                            <img src={github} alt="github logo"/>
                            <p>View on github</p>
                        </a>
                    </div>
                </BackSide>
            </Flippy>
        </div>
    );
}

export function Node () {
    return (
        <div>
            <Flippy flipOnHover={true} flipDirection="horizontal" style={{ width: "350px", height: "300px" }} >
                <FrontSide>
                    <img src={essentialism} alt="Essentialism" style={{ width: "320px", height: "280px" }} />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#175852" }}>
                    <h4>Essentialism</h4>
                    <p>Node.js and Postgres</p>
                    <div>
                        <a href="/a">View site</a>
                        <a href="https://github.com/mariehposa" title="github profile">
                            <img src={github} alt="github logo"/>
                            <p>View on github</p>
                        </a>
                    </div>
                </BackSide>
            </Flippy>
        </div>
    );
}
