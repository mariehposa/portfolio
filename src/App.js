import React, {useState} from "react";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Project from "./components/project/project";
import Navigation, {BurgerMenu} from "./components/navigation/navigation";
import Sticky from 'react-headroom';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <Sticky><Navigation /></Sticky>
      <BurgerMenu isOpen = {isMenuOpen} onStateChange = {(state) => setMenuOpen(state.isOpen)} setMenuOpen={setMenuOpen} />
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
