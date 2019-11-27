import React from "react";
import { Route } from "react-router-dom";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Project from "./components/project/project";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Route exact path="/" component={Header} /> */}
      <Header />
      <Navigation />
      <About />
      <Portfolio />
      <Project />
      <Contact />
      <Footer />

      {/* <Router>
      <Navigation />
       <div>
       <Route path="/about" component={About} /> 
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/project" component={Project}/>
      <Route path="/contact" component={Contact} />
      <Route path="/footer" component={Footer}/>
       </div>
     </Router> */}
    </div>
  );
}

export default App;

// function AllComponents () {
//   return (
//     <div>
//       <Header />
//       <About />
//       <Portfolio />
//       <Project />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
