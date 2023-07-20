import Nav from "./components/Nav";
import About from "./components/About";
import Socials from "./components/Socials";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <About />
        <Socials />
      </div>
    </div>
  );
}

export default App;
