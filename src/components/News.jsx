import React, { useState, useEffect } from "react";
import image1 from "../assets/image.webp";
import image2 from "../assets/image2.webp";
import Button from "@mui/material/Button";

const News = () => {
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    // Change image every 3 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-column flex-lg-row justify-content-between  gap-7 flex-lg-row py-5">
        <div className="text-start text-adv order-2 order-lg-1 ">
          <h1 className="text-bold diplay-1">About Entop</h1>
          <p className="text-muted fs-5  pt-2 pb-2  ">
            Welcome to Entop Construct! We turn your dreams into reality with
            confidence. Our strength lies in prioritizing and exceeding client
            expectations. Let us build your project with the best expertise. At
            Entop Construct, we provide a unique and professional experience,
            empowering you to control your dream home. Build with confidence –
            it's our commitment to you
          </p>
          <Button
            sx={{
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "black", // Set hover color to be the same as the background color
              },
            }}
            variant="contained"
          >
            Read more
          </Button>
        </div>
        <div className=" order-1 order-lg-2 ">
          <div>
            <img className="rounded-3   image-adv" src={currentImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
