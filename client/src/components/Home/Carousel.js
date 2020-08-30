
import React, { useState } from "react";
import "../../css/Carousel.css";
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

import imageOne from "../../images/image 1.jpg";
import imageTwo from "../../images/image 2.jpg";
import imageThree from "../../images/image 3.jpg";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }



  return (

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image src={imageOne} className="carousel-image" fluid />

      </Carousel.Item>
      <Carousel.Item>
        <Image src={imageTwo} className="carousel-image" fluid />

      </Carousel.Item>
      <Carousel.Item>
        <Image src={imageThree} className="carousel-image" fluid />
      </Carousel.Item>
    </Carousel>

  );
};

export default ControlledCarousel;