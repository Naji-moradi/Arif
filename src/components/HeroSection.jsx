import React from "react";
import video from "../assets/video.mp4";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const HeroSection = () => {
  return (
    <div className="App1">
      <header className="App-header">
        <video autoPlay loop muted className="video-bg">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content1">
          <div className="hero_text display-1 fw-bold h1 ">
            <h1 className="fw-bold text-white">Entop Construction </h1>

            <h1 className="text-center fw-bold text-white">Pty Ltd</h1>
            <div className="d-flex flex-row gap-3 text-center icons">
              <MailOutlineIcon
                sx={{
                  p: "5px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "7px",
                  fontSize: "50px",
                  fontSize: {
                    xs: "2rem", // Extra small screens (0-600px)
                    sm: "2.5rem", // Small screens (600-960px)
                    md: "3rem", // Medium screens (960-1280px)
                    lg: "3.5rem", // Large screens (1280-1920px)
                    xl: "4rem", // Extra large screens (1920px and above)
                  },
                }}
                className="hero_icons"
              />

              <AddIcCallIcon
                sx={{
                  p: "5px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "7px",
                  fontSize: "50px",
                  fontSize: {
                    xs: "2rem", // Extra small screens (0-600px)
                    sm: "2.5rem", // Small screens (600-960px)
                    md: "3rem", // Medium screens (960-1280px)
                    lg: "3.5rem", // Large screens (1280-1920px)
                    xl: "4rem", // Extra large screens (1920px and above)
                  },
                }}
                className="hero_icons"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
