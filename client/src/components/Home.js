import React from "react";
import Carousel from "../components/Carousel";
import '../css/Home.css'
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="m-3 text-center p-2 banner">
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
            <img
              className="card-img-top"
              src="https://image.shutterstock.com/z/stock-vector-hello-bubble-red-speech-message-hello-speech-message-text-hello-in-flat-vector-bubl-eps-1370668307.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                perferendis alias quidem autem commodi pariatur eveniet fugit
                laudantium, maiores temporibus eaque aliquid consequuntur optio
                perspiciatis hic mollitia quod, ad reprehenderit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Odio atque, dolores
                quas sed nostrum rem ipsum rerum maxime nihil fugiat?
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card cardrow">
            <img
              className="card-img-top"
              src="https://image.shutterstock.com/z/stock-vector-hello-bubble-red-speech-message-hello-speech-message-text-hello-in-flat-vector-bubl-eps-1370668307.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                perferendis alias quidem autem commodi pariatur eveniet fugit
                laudantium, maiores temporibus eaque aliquid consequuntur optio
                perspiciatis hic mollitia quod, ad reprehenderit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Odio atque, dolores
                quas sed nostrum rem ipsum rerum maxime nihil fugiat?
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card cardrow">
            <img
              className="card-img-top"
              src="https://image.shutterstock.com/z/stock-vector-hello-bubble-red-speech-message-hello-speech-message-text-hello-in-flat-vector-bubl-eps-1370668307.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                perferendis alias quidem autem commodi pariatur eveniet fugit
                laudantium, maiores temporibus eaque aliquid consequuntur optio
                perspiciatis hic mollitia quod, ad reprehenderit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Odio atque, dolores
                quas sed nostrum rem ipsum rerum maxime nihil fugiat?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
