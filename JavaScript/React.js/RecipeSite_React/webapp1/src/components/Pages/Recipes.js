import React from "react";
import "../../App.css";
import Footer from "../Footer";
import MainSection from "../MainSection";
import { RecipePage } from "../Cards";

export default function Recipes() {
  return (
    <>
      <h1 className="recipePage">RECIPES</h1>
      <RecipePage />
      <Footer />
    </>
  );
}
