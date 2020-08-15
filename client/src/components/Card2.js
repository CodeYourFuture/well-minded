import React from "react";
import imageFive from "../images/image 5.jpg";
const Card2 = () => {
  return (
    <div class="card">
      <img src={imageFive} class="card-img-top" alt="img" />
      <div class="card-body">
        <h5 class="card-title">Mental Health Problems</h5>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active">
            Anxiety
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            Depression
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            Bipolar
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            schizophrenia
          </a>
          <a href="#" class="list-group-item list-group-item-action disabled">
            Stress
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card2;
