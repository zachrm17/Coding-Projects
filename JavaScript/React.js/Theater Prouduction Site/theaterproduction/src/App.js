import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Productions from "./Components/Pages/Productions";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import MeetTheCrew from "./Components/Pages/MeetTheCrew";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/productions" exact Component={Productions} />
          <Route path="/meetthecrew" exact Component={MeetTheCrew} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
