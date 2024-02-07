import React from "react";

import imag1 from "../assets/image1.webp";
import imag2 from "../assets/image3.webp";
import imag3 from "../assets/image4.webp";
const Cards = () => {
  return (
    <div>
      <div className="container py-5 ">
        <div className="row ">
          <div className="col-12 col-md-4 ">
            <div
              className="box-color d-flex flex-column text-center p-5 border border-2 
            my-3 py-5 bg-light hoverCard
            m-2 "
            >
              <div className="text-center">
                <img src={imag1} alt="image1" className="cardImage" />
              </div>
              <span>
                <h3 className="text-bold   py-1">Custom housing</h3>
              </span>
            </div>
          </div>{" "}
          <div className="col-12 col-md-4 ">
            <div
              className="box-color d-flex flex-column text-center p-5 border border-2 
            my-3   py-5 bg-light hoverCard
            m-2 "
            >
              <div className="text-center">
                <img src={imag2} alt="image1" className="cardImage" />
              </div>
              <span>
                <h3 className="text-bold  ">Custom housing</h3>
              </span>
            </div>
          </div>{" "}
          <div className="col-12 col-md-4 ">
            <div
              className="box-color d-flex flex-column text-center p-5 border border-2 
            my-3   py-5 bg-light hoverCard
            m-2 "
            >
              <div className="text-center">
                <img src={imag3} alt="image1" className="cardImage" />
              </div>
              <span>
                <h3 className="text-bold   ">Custom housing</h3>
              </span>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Cards;
