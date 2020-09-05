import React from "react";
import "../../css/Home.css";
const Card = (props) => {
  return (
    <div className="col-lg-4 card-holder">
      <div className="card cardrow">
        <div className="img-box">
          <img className="card-img-top" src={props.src} alt={props.alt} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.paragraph}</p>
          <a href={props.link} className="btn btn-primary">
            {props.linkcap}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
