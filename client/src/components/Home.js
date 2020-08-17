import React from "react";
import Carousel from "../components/Carousel";
import '../css/Home.css'
import imageSix from "../images/image 6.jpg";
import imageFive from "../images/image 5.jpg";
import imageFour from "../images/image 4.jpeg";
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="m-3 text-center p-2 banner">
          <h1 className="title">Well-minded</h1>
          <Carousel />
        </div>
      </div>
      <div className="row m-2">
        <div className="card">
          <h3 className="card-header">Who we are </h3>
          <div className="card-body">
            <p className="card-text">
              We support Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Unde odio at pariatur? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Obcaecati voluptatibus animi vitae!
              Consectetur, nesciunt dolores dicta fuga est ad reiciendis ipsum
              error enim! Facilis illo corporis molestias dolores quia in. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet
              mollitia repellat culpa nulla, ad asperiores harum in
              necessitatibus. Provident.
            </p>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="card">
          <h3 className="card-header">what we do</h3>
          <div className="card-body">
            <p className="card-text">
              We support Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Unde odio at pariatur? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Obcaecati voluptatibus animi vitae!
              Consectetur, nesciunt dolores dicta fuga est ad reiciendis ipsum
              error enim! Facilis illo corporis molestias dolores quia in. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet
              mollitia repellat culpa nulla, ad asperiores harum in
              necessitatibus. Provident.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-4">
          <div className="card cardrow">
            <img className="card-img-top" src={imageSix} alt="Card image cap" />
            <div className="card-body">
              <div class="list-group">
                <a
                  href="https://www.mentalhealth.org.uk/"
                  class="list-group-item list-group-item-action-item-primary"
                >
                  Mental Health Foundation
                </a>

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
              <h5 class="card-title">ORGANIZATIONS</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                perferendis alias quidem autem commodi pariatur eveniet fugit
                laudantium, maiores temporibus eaque aliquid consequuntur optio
                
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
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action active"
                >
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
                <a
                  href="#"
                  class="list-group-item list-group-item-action disabled"
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
