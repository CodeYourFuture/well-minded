
import React, { useState, useEffect } from "react";
import "../../css/Carousel.css";


import imageOne from "../../images/image 1.jpg";
import imageTwo from "../../images/image 4.jpg";
import imageThree from "../../images/image 3.jpg";


const images = [imageOne, imageTwo, imageThree];

const Carousel = () => {
  const [curr, setCurr] = useState(0);
  // current === images.length - 1 ? 0 : current + 1;

  useEffect(() => {
    setInterval(() => {
      setCurr((current) => {
        if (current === images.length - 1) {
          return 0;
        } else {
          return current + 1;
        }
      });
    }, 5000);
  }, []);

  return (
    <div classNameName="slide-holder">
      <div>
        {images.map(
          (image, index) => index === curr &&
          <img  className="car-img"  src={image} alt="test" />
        )}
      </div>
    </div>
    
  );
};

export default Carousel;
