import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Home/Carousel";
import "../../css/Home.css";
import imageSix from "../../images/image 6.jpg";
import imageFive from "../../images/image 5.jpg";
import imageFour from "../../images/image 4.jpeg"
import Whatwe from "../Home/Whatwe"
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="m-3 text-center p-2 banner">
          <h1 className="title"> Well - minded </h1> 
          <Carousel />
        </div>
      </div>
      <div className="row m-2">
        <Whatwe/>
      </div>
      <div className="row m-2">
        <div className="card">
          <h3 className="card-header"> what we do </h3>
          <div className="card-body">
            <p className="card-text">
              We support Lorem ipsum dolor sit amet consectetur adipisicing
              elit.Unde odio at pariatur ? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit.Obcaecati voluptatibus animi vitae!
              Consectetur, nesciunt dolores dicta fuga est ad reiciendis ipsum
              error enim!Facilis illo corporis molestias dolores quia in .Lorem
              ipsum dolor sit amet consectetur adipisicing elit.Ipsa eveniet
              mollitia repellat culpa nulla, ad asperiores harum in
              necessitatibus.Provident.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4 card-container">
        <div className="col-lg-4  card-holder">
          <div className="card cardrow">
            <div>
              <img
                className="card-img-top"
                src={imageSix}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title"> Organizations </h4> <div></div>{" "}
              <div className="list-group">
                <a
                  href="https://www.mentalhealth.org.uk/"
                  className="list-group-item list-group-item-action-item-primary"
                >
                  Mental Health Foundation
                </a>
                <a
                  href="https://www.mind.org.uk/"
                  className="list-group-item list-group-item-action-item-primary"
                >
                  Mind{" "}
                </a>{" "}
                <a
                  href="https://www.together-uk.org/"
                  className="list-group-item list-group-item-action-item-primary"
                >
                  Together
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card cardrow">
            <img
              className="card-img-top"
              src={imageFive}
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-title"> Blogs </h4>{" "}
              <p>
                <Link to="/Blogs"> Top 20 Mental Health Blogs to Read </Link>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card cardrow">
            <img
              className="card-img-top"
              src={imageFour}
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-title"> Mental Problems </h4>{" "}
              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action-item-primary"
                >
                  Anxiety
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action-item-primary"
                >
                  Depression
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action-item-primary"
                >
                  Bipolar
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action-item-primary"
                >
                  Schizophrenia
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action-item-primary"
                >
                  Stress
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
