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
              className="box-color d-flex flex-row flex-md-column text-center p-2 py-md-5 border border-2 
            my-3   py-5 bg-light hoverCard
             "
            >
              <div className="text-center iconForMobile">
                <img src={imag1} alt="image1" className="cardImage" />
              </div>
              <span className="textforItem">
                <h3 className="text-bold text-muted   py-1">Custom housing</h3>
              </span>
            </div>
          </div>{" "}
          <div className="col-12 col-md-4 ">
            <div
              className="box-color d-flex flex-row flex-md-column text-center p-2 py-md-5 border border-2 
            my-3   py-5 bg-light hoverCard
             "
            >
              <div className="text-center iconForMobile">
                <img
                  src={imag2}
                  alt="image1"
                  className="text-muted cardImage"
                />
              </div>
              <span className="textforItem ">
                <h3 className="text-bold text-muted   ">Design & construct</h3>
              </span>
            </div>
          </div>{" "}
          <div className="col-12 col-md-4 ">
            <div
              className="box-color d-flex flex-row flex-md-column text-center p-2 py-md-5 border border-2 
            my-3   py-5 bg-light hoverCard
             "
            >
              <div className="text-center iconForMobile ">
                <img src={imag3} alt="image1" className="cardImage" />
              </div>
              <span className="textforItem">
                <h3 className="text-bold text-muted    ">Upgare & Downsize</h3>
              </span>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Cards;
