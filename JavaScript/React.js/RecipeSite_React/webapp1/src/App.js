import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import Recipes from "./components/Pages/Recipes";
import Affiliates from "./components/Pages/Affiliates";
import WalkingTaco from "./components/Pages/Recipes/WalkingTaco";
import PBOats from "./components/Pages/Recipes/PBOats";
import ChickenDip from "./components/Pages/Recipes/ChickenDip";
import ChickenCheeseFries from "./components/Pages/Recipes/ChickenCheeseFries";
import SpaghettiMealPrep from "./components/Pages/Recipes/SpaghettiMealPrep";
import AboutMe from "./components/Pages/AboutMe";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/recipes" Component={Recipes} />
          <Route path="/affiliates" Component={Affiliates} />
          <Route path="/aboutme" Component={AboutMe} />
          <Route path="/walkingtaco" Component={WalkingTaco} />
          <Route path="/pboats" Component={PBOats} />
          <Route path="/chickendip" Component={ChickenDip} />
          <Route path="/chickencheesefries" Component={ChickenCheeseFries} />
          <Route path="/spaghetti" Component={SpaghettiMealPrep} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
