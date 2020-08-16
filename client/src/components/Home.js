import React from "react";
import Carousel from "../components/Carousel";

import '../css/Home.css'
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
      <div className="row">
        <div className="m-2">
          <h1>what we do </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            corporis, inventore nostrum eum repellendus, a ipsum quod id dicta
            impedit aliquid error voluptatum incidunt nemo natus modi veniam
            dolores. Dolorum.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Card1 />
        </div>
        <div className="col-lg-4">
          <Card2 />{" "}
        </div>
        <div className="col-lg-4">
          <Card3 />

        </div>
      </div>
    </div>
  );
};
export default Home;
