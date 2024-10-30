import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "images/IMG_7535.jpg",
    thumbnail: "images/IMG_7535.jpg",
  },
  {
    original: "images/IMG_7555.jpg",
    thumbnail: "images/IMG_7555.jpg",
  },
  {
    original: "images/IMG_7684.jpg",
    thumbnail: "images/IMG_7684.jpg",
  },
  {
    original: "images/IMG_7741.jpg",
    thumbnail: "images/IMG_7741.jpg",
  },
  {
    original: "images/IMG_7743.jpg",
    thumbnail: "images/IMG_7743.jpg",
  },
  {
    original: "images/IMG_8221.jpg",
    thumbnail: "images/IMG_8221.jpg",
  },
  {
    original: "images/IMG_0429.jpeg",
    thumbnail: "images/IMG_0429.jpeg",
  },
  {
    original: "images/IMG_0452 (1).jpeg",
    thumbnail: "images/IMG_0452 (1).jpeg",
  },
  {
    original: "images/IMG_4668 (1).jpeg",
    thumbnail: "images/IMG_4668 (1).jpeg",
  },
  {
    original: "images/collage1.jpg",
    thumbnail: "images/collage1.jpg",
  },
  {
    original: "images/collage2.jpg",
    thumbnail: "images/collage2.jpg",
  },
];

class Gallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Gallery;
