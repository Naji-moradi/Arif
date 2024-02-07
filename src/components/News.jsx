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
      <div className="d-flex flex-column justify-content-between  gap-7 flex-lg-row py-5">
        <div className="text-start text-adv ">
          <h1 className="text-bold diplay-1">About Entop</h1>
          <h3 className="text-muted pt-2 pb-2  ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            veniam impedit asperiores, officiis molestias ullam autem labore
            atque recusandae aspernatur quaerat
          </h3>
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
        <div>
          <div>
            <img className="rounded-3   image-adv" src={currentImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
