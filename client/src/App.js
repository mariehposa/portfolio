import React from "react";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Project from "./components/project/project";
import Navigation from "./components/navigation/navigation";
import Sticky from 'react-headroom';

function App() {
  return (
    <div>
      <Sticky><Navigation /></Sticky>
      <Header />
      <About />
      <Portfolio />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
