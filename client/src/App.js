import React from 'react';
import { Route } from 'react-router-dom';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Route exact path="/" component={Header} />
      <Route path="about" component={About} />
      <Route path="portfolio" component={Portfolio}/>
      <Route path="projects" component={Project}/>
      <Route path="/contact" component={Contact} />
      <Route path="footer" component={Footer}/>
    </div>
  );
}

export default App;
