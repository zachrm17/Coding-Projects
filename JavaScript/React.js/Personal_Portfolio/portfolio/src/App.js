import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Projects from "./Components/Pages/Projects";
import Skills from "./Components/Pages/Skills";

function App() {
  return (
    <>
      <Router>
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
