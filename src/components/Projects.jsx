import React from "react";
import image0 from "../assets/house22.jpg";
import image1 from "../assets/houseimg02.webp";
import image11 from "../assets/house21.jpg";
import image2 from "../assets/houseimage2.jpeg";
import image4 from "../assets/houseimg4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  var settings = {
    //  dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container ">
      <div className="px-3 my-5 pt-5 pb-4">
        <h4 className="">Work Collection</h4>
        <h1 className="fw-bold display-2">Project </h1>
      </div>
      <div className="text-center px-3 imageProject my-3  ">
        <img className="rounded-4   " src={image11} alt="" />
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="px-3 py-2">
            <img className="img-fluid rounded" src={image0} alt="image" />
          </div>
          <div className=" px-3 py-2">
            <img className="img-fluid rounded" src={image2} alt="image" />
          </div>
          <div className="px-3 py-2">
            <img className="img-fluid rounded" src={image1} alt="image" />
          </div>
          <div className="px-3 py-2">
            <img className="img-fluid rounded" src={image4} alt="image" />
          </div>
        </Slider>
      </div>
      <div className="d-flex flex-column flex-sm-row gap-4 px-3 my-3">
        <div>
          <h3>House no:123</h3>
          <p className="fw-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            dignissimos soluta optio. Soluta neque fuga impedit exercitationem
            eos odit. Cumque reiciendis molestias repudiandae eligendi ex, illo,
            corporis magni doloribus, modi quam nobis sint nihil eius.
          </p>
        </div>
        <div>
          <h3>design</h3>
          <p className="fw-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            dignissimos soluta optio. Soluta neque fuga impedit exercitationem
            eos odit. Cumque reiciendis molestias repudiandae eligendi ex, illo,
            corporis magni doloribus, modi quam nobis sint nihil eius.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
