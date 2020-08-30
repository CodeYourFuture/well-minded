
import React, { useState, useEffect } from "react";
import "../../css/Carousel.css";
import Carousel from 'react-bootstrap/Carousel'


import imageOne from "../../images/image 1.jpg";
import imageTwo from "../../images/image 4.jpg";
import imageThree from "../../images/image 3.jpg";


const images = [imageOne, imageTwo, imageThree];

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  // current === images.length - 1 ? 0 : current + 1;
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }



  return (

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageOne}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageTwo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageThree}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

  );
};

export default ControlledCarousel;
