import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Projects from "./Components/Pages/Projects";
import Skills from "./Components/Pages/Skills";
import ScrollToTop from "./ScrollToTop";
import Navbar2 from "./Components/Navbar2";

function App() {
  return (
    <>
      <Router>
        <Navbar2 />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/contact" exact Component={Contact} />
          <Route path="/projects" exact Component={Projects} />
          <Route path="/skills" exact Component={Skills} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
