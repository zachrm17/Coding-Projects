import React from "react";
import HeroSection from "../Sections/HeroSection";
import CarouselPhotos from "../CarouselPhotos";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <HeroSection />
        <CarouselPhotos />
      </div>
    </>
  );
}

export default Home;
