import "./App.css";
import ScrollToTop from "./ScrollToTop";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import Leagues from "./components/Pages/Leagues";
import Schedules from "./components/Pages/Schedules";
import SpecialEvents from "./components/Pages/SpecialEvents";
import SCRA from "./components/Pages/Leagues/SCRA";
import FCL from "./components/Pages/Leagues/FCL";
import ContentCreators from "./components/Pages/ContentCreators";
import EDS from "./components/Pages/Leagues/EDS";
import SpareParts from "./components/Pages/Leagues/SpareParts";
import RWL from "./components/Pages/Leagues/RWL";
import LegalLimit from "./components/Pages/Leagues/LegalLimit";
import Luau from "./components/Pages/Specials/Luau";
import IceBreaker from "./components/Pages/Specials/IceBreaker";
import OAS from "./components/Pages/Leagues/OAS";
import PaintCountyPink from "./components/Pages/Specials/PaintCountyPink";
import ESR from "./components/Pages/Leagues/ESR";
import Jdubbs from "./components/Pages/ContentCreators/Jdubbs";
import VDL from "./components/Pages/Leagues/VDL";
import jessemeek from "./components/Pages/ContentCreators/jessemeek";
import Schedules_Nov from "./components/Pages/Schedules_Nov";
import BCRL from "./components/Pages/Leagues/BCRL";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leagues" element={<Leagues />} />
          <Route path="/Schedules" element={<Schedules />} />
          <Route path="/SpecialEvents" element={<SpecialEvents />} />
          <Route path="/ContentCreators" element={<ContentCreators />} />
          <Route path="/SCRA" element={<SCRA />} />
          <Route path="/FCL" element={<FCL />} />
          <Route path="/EDS" element={<EDS />} />
          <Route path="/SpareParts" element={<SpareParts />} />
          <Route path="/ESR" element={<ESR />} />
          <Route path="/RWL" element={<RWL />} />
          <Route path="/LegalLimit" element={<LegalLimit />} />
          <Route path="/Luau" element={<Luau />} />
          <Route path="/icebreaker" element={<IceBreaker />} />
          <Route path="/OAS" element={<OAS />} />
          <Route path="/paintcountypink" element={<PaintCountyPink />} />
          <Route path="/jdubbs" exact Component={Jdubbs} />
          <Route path="/VDL" exact Component={VDL} />
          <Route path="/bulldog" exact Component={jessemeek} />
          <Route path="/Schedules_Nov" exact Component={Schedules_Nov} />
          <Route path="/BCRL" exact Component={BCRL} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
