import React from 'react'
import Carousel from "../components/Carousel";
const Home =()=>{
  return (
    <div className="container">
      <div className="row">
        <div className="m-3 text-center p-2 banner">
          <Carousel />
        </div>
      </div>
      <div className="row">
        <div className="m-2">
          <h1>who we are </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            corporis, inventore nostrum eum repellendus, a ipsum quod id dicta
            impedit aliquid error voluptatum incidunt nemo natus modi veniam
            dolores. Dolorum.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="m-2">
          <h1>who we do </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            corporis, inventore nostrum eum repellendus, a ipsum quod id dicta
            impedit aliquid error voluptatum incidunt nemo natus modi veniam
            dolores. Dolorum.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4"> hello one </div>
        <div className="col-lg-4"> hello two </div>
        <div className="col-lg-4"> hello three</div>
      </div>
    </div>
  );
}
export default Home;