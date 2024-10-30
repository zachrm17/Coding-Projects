import React from "react";
import Carousel from "react-elastic-carousel";
import CarouselCard from "./CarouselCard";

function CarouselPhotos() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const imgUrls = [
    "/photos/shakes.jpg",
    "/photos/teas.jpg",
    "/photos/treats.jpg",
    "/photos/coffee.jpg",
    "/photos/bowls.jpg",
    "/photos/refresher.jpg",
    "/photos/shake1.jpg",
    "/photos/shake2.jpg",
  ];

  return (
    <Carousel breakPoints={breakPoints}>
      {imgUrls.map((url, index) => (
        <CarouselCard key={index} imageUrl={url} />
      ))}
    </Carousel>
  );
}

export default CarouselPhotos;
