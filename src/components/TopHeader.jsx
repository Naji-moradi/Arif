import React, { useState } from "react";
import { Link } from "react-router-dom";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo1.webp";
const TopHeader = () => {
  const [isDivOpen, setIsDivOpen] = useState(false);
  const toggleDiv = () => {
    setIsDivOpen(!isDivOpen);
  };
  return (
    <div className="hero1 ">
      <nav>
        <div className="wrapper">
          <div className="logo">
            <img className="logo1" src={logo} alt="" />
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label for="close-btn" className="btn close-btn"></label>
            <li>
              <Link to="/entop">
                <a href="#">WhyEntop?</a>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <a href="#">Projects</a>
              </Link>
            </li>

            <li>
              <li>
                <Link to="/services">
                  <a href="#">Services</a>
                </Link>
              </li>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" className="mobile-item">
                Dropdown Menu
              </label>
              <ul className="drop-menu dropdown">
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
          </ul>

          <span className=" btn btn-outline-light bg-light text-dark btnStyle ">
            <div onClick={toggleDiv}>
              {isDivOpen ? <CloseIcon /> : <DragHandleIcon />}
            </div>
          </span>
        </div>
      </nav>

      {isDivOpen && (
        <div className="centered-div py-5  dropdoenforMobile">
          <h5>Menue</h5>
          <ul className="px-0 fw-semibold  ">
            <li>Home</li>
            <li>Project</li>
            <li>Services</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopHeader;
