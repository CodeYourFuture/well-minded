import React from "react";
import imageFour from "../images/image 4.jpg";
// import imageTwo from "../images/image 2.jpg";
// import imageThree from "../images/image 3.jpg";
const Card1 = () => {
  return (
    <div class="card">
      <img src={imageFour} class="card-img-top" alt="img" />
      <div class="card-body">
        <h5 class="card-title">Organizations</h5>
        <p class="card-text">Usefull links about mental health and wellbeing</p>
        <div class="list-group">
          <a
            href="https://www.mentalhealth.org.uk/"
            class="list-group-item list-group-item-action-item-primary"
          >
            Mental Health Foundation
          </a>
        </div>
        <a
          href="https://www.mind.org.uk/"
          class="list-group-item list-group-item-action-item-primary"
        >
          Mind
        </a>
        <a
          href="https://www.together-uk.org/"
          class="list-group-item list-group-item-action-item-primary"
        >
          Together
        </a>
      </div>
    </div>
  );
};
export default Card1;
