import React from "react";
import imageFour from "../images/image 4.jpg";
// import imageTwo from "../images/image 2.jpg";
// import imageThree from "../images/image 3.jpg";
const Cards = () => {
  return (
    <div class="card">
      <img src="imageOne" class="card-img-top" alt="photo" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Cards;
