import React, {useState} from "react";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Navigation, {BurgerMenu} from "./components/navigation/navigation";
import Skills from "./components/skills/skills";
import Sticky from 'react-headroom';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <Sticky><Navigation /></Sticky>
      <BurgerMenu isOpen = {isMenuOpen} onStateChange = {(state) => setMenuOpen(state.isOpen)} setMenuOpen={setMenuOpen} />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
