import "./App.css";
import ScrollToTop from "./ScrollToTop";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import Leagues from "./components/Pages/Leagues";
import Schedules from "./components/Pages/Schedules";
import SpecialEvents from "./components/Pages/SpecialEvents";
// import Discord from "./components/Pages/Discord";
import SCRA from "./components/Pages/Leagues/SCRA";
import FCL from "./components/Pages/Leagues/FCL";
import ContentCreators from "./components/Pages/ContentCreators";
import EDS from "./components/Pages/Leagues/EDS";
import SpareParts from "./components/Pages/Leagues/SpareParts";
import Woods from "./components/Pages/Leagues/Woods";
import RWL from "./components/Pages/Leagues/RWL";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Leagues" exact Component={Leagues} />
          <Route path="/Schedules" exact Component={Schedules} />
          <Route path="/SpecialEvents" exact Component={SpecialEvents} />
          {/* <Route path="/Discord" exact Component={Discord} /> */}
          <Route path="/ContentCreators" exact Component={ContentCreators} />
          <Route path="/SCRA" exact Component={SCRA} />
          <Route path="/FCL" exact Component={FCL} />
          <Route path="/EDS" exact Component={EDS} />
          <Route path="/SpareParts" export exact Component={SpareParts} />
          <Route path="/WOODS" export exact Component={Woods} />
          <Route path="/RWL" export exact Component={RWL} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
