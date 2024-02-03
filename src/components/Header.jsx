import React, { useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isDivOpen, setIsDivOpen] = useState(false);
  const toggleDiv = () => {
    setIsDivOpen(!isDivOpen);
  };
  return (
    <div className="hero1 ">
      <video autoPlay loop muted playsInline>
        <source className="back-video" src={video} type="video/mp4" />
      </video>

      <nav>
        <div className="wrapper">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label for="close-btn" className="btn close-btn">
              {/* <i className="fas fa-times">ffff</i> */}
            </label>
            <li>
              <a href="#">Projects</a>
            </li>

            <li>
              <a href="#" className="desktop-item">
                Dropdown Menu
              </a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" className="mobile-item">
                Dropdown Menu
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Custom home</a>
                </li>
                <li>
                  <a href="#">Desing and contract</a>
                </li>
                <li>
                  <a href="#">Exraction and </a>
                </li>
                <li>
                  <a href="#">Knockdown&rebuild</a>
                </li>
                <li>
                  <a href="#">Multi unit and ...</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            {/* <li>
            <a href="#" className="desktop-item">
              Mega Menu
            </a>
            <input type="checkbox" id="showMega" />
            <label for="showMega" className="mobile-item">
              Mega Menu
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                    alt=""
                  />
                </div>
                <div className="row">
                  <header>Design Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Graphics</a>
                    </li>
                    <li>
                      <a href="#">Vectors</a>
                    </li>
                    <li>
                      <a href="#">Business cards</a>
                    </li>
                    <li>
                      <a href="#">Custom logo</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Email Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Personal Email</a>
                    </li>
                    <li>
                      <a href="#">Business Email</a>
                    </li>
                    <li>
                      <a href="#">Mobile Email</a>
                    </li>
                    <li>
                      <a href="#">Web Marketing</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Security services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Site Seal</a>
                    </li>
                    <li>
                      <a href="#">VPS Hosting</a>
                    </li>
                    <li>
                      <a href="#">Privacy Seal</a>
                    </li>
                    <li>
                      <a href="#">Website design</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li> */}
          </ul>

          <span className=" btn btn-outline-light bg-light text-dark btnStyle ">
            <div onClick={toggleDiv}>
              {isDivOpen ? <CloseIcon /> : <DragHandleIcon />}
            </div>
          </span>
        </div>
      </nav>

      {isDivOpen && (
        <div className="centered-div">
          <h6>Menue</h6>
          <ul>
            <li>Home</li>
            <li>Project</li>
            <li>Services</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
      )}

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
  );
};

export default Header;
