import React from "react";
import image1 from "../assets/hiabout1.webp";
import image2 from "../assets/houseimg3.webp";
import image3 from "../assets/hiabut2.jpeg";
import image4 from "../assets/hiabout2.webp";
import image5 from "../assets/hiabout3.jpg";
import Button from "@mui/material/Button";
const Services = () => {
  return (
    <div className="container">
      <div className=" d-flex flex-column flex-lg-row gap-5 aboutNews justify-content-between">
        <div className="col-lg-6">
          <div className="img-fluid  aboutImages ">
            <img src={image1} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6  ">
          <h1 className="fw-bold display-4">Custom House</h1>
          <p className="fw-semibold text-muted fs-4 py-1 pb-1 pb-sm-2  ">
            We pride ourselves on being custom builders. Custom homes give you
            the option to have a design that you like. The style that you have
            always admired and all the fittings …
          </p>
          <Button
            sx={{
              py: "8px",
              px: "10px",
            }}
            variant="contained"
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="container d-flex flex-column flex-lg-row gap-5 py-2justify-content-between aboutNews">
        <div className="col-lg-6 order-2  order-lg-1  ">
          <h1 className="fw-bold display-4">Design and construct</h1>
          <p className="fw-semibold text-muted fs-4 py-1 pb-1 pb-sm-2  ">
            At Entop Construct, we pride ourselves in offering our clients with
            ranges of designs and options to meet your home design, budget and
            lifestyle.
          </p>
          <Button
            sx={{
              py: "8px",
              px: "10px",
            }}
            variant="contained"
          >
            Learn more
          </Button>
        </div>
        <div className="order-1  order-lg-2 col-lg-6">
          <div className="img-fluid  aboutImages ">
            <img src={image2} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column flex-lg-row gap-5 py-2justify-content-between aboutNews">
        <div className="col-lg-6">
          <div className="img-fluid  aboutImages ">
            <img src={image3} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6  ">
          <h1 className="fw-bold display-4">Knockdown and Rebuild </h1>
          <p className="fw-semibold text-muted fs-4 py-1 pb-1 pb-sm-2  ">
            Knockdown Rebuild is becoming an increasing popular, cost effective
            and time efficient option to achieving a brand new home.
          </p>
          <Button
            sx={{
              py: "8px",
              px: "10px",
            }}
            variant="contained"
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="container d-flex flex-column flex-lg-row gap-5 py-2justify-content-between aboutNews">
        <div className="col-lg-6  order-2  order-lg-1    ">
          <h1 className="fw-bold display-4">Extensions and Renovations</h1>
          <p className="fw-semibold text-muted fs-4 py-1 pb-1 pb-sm-2   ">
            Adding a first floor or second storey extension to your house will
            significantly increase the space in your home without increasing the
            …
          </p>
          <Button
            sx={{
              py: "8px",
              px: "10px",
            }}
            variant="contained"
          >
            Learn more
          </Button>
        </div>
        <div className="col-lg-6 order-1  order-lg-2">
          <div className="img-fluid  aboutImages ">
            <img src={image4} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column flex-lg-row gap-5 py-2justify-content-between aboutNews mb-5 pb-5">
        <div className="col-lg-6">
          <div className="img-fluid  aboutImages ">
            <img src={image5} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6  ">
          <h3 className="fw-bold display-5">Multi-Unit Development</h3>
          <p className="fw-semibold text-muted fs-4 py-1 pb-1 pb-sm-1  ">
            As experts in building multi-unit developments, we emphasis high
            quality products, materials and workmanship above all else.
          </p>
          <Button
            sx={{
              py: "8px",
              px: "10px",
            }}
            variant="contained"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
