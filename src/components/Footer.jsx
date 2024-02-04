import React from "react";
import logo from "../assets/logo.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer-a">
      <div className=" row p-4">
        <div className="col-md-6 col-12">
          <div>
            <img src={logo} alt="logo" className="logo-a" />
          </div>
          <h2 className="fw-bold py-2">Entop Construction</h2>
          <p>This is a sample text, This is a sample text</p>
          <p>This is a sample text, This is a sample text</p>
          <p>This is a sample text, </p>
          <hr className="w-25 h4" />
          <span className="fw-bold text-muted"> Follow as on:</span>
          <div className="d-flex gap-2 py-3">
            <FacebookIcon
              sx={{
                fontSize: 30,

                borderRadius: "50%",
              }}
            />
            <InstagramIcon
              sx={{
                fontSize: 30,

                borderRadius: "50%",
              }}
            />
            <TwitterIcon
              sx={{
                fontSize: 30,

                borderRadius: "50%",
              }}
            />
            <YouTubeIcon
              sx={{
                fontSize: 30,

                borderRadius: "50%",
              }}
            />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="d-flex justify-content-between justify-content-md-around">
            <div>
              <p
                class="h5 mb-4 fw-bold text-muted"
                style={{ fontWeight: "400" }}
              >
                Links:
              </p>
              <ul class="p-0" style={{ listStyle: "none", cursor: "pointer" }}>
                <li class="my-2 foter-item text-muted">Home</li>
                <li class="my-2 foter-item text-muted">Projects</li>
                <li class="my-2 foter-item text-muted">Services</li>
                <li class="my-2 foter-item text-muted">About</li>
                <li class="my-2 foter-item text-muted">Contact</li>
              </ul>
            </div>
            <div>
              <p
                class="h5 mb-4 fw-bold text-muted"
                style={{ fontWeight: "400" }}
              >
                Contact:
              </p>
              <ul class="p-0" style={{ listStyle: "none", cursor: "pointer" }}>
                <li class="my-2 foter-item text-muted">
                  123 Noname street, Noname city.
                </li>
                <li class="my-2 foter-item text-muted"> city Perth, 0123</li>
                <li class="my-2 foter-item text-muted">
                  Email: Info@entop.com.au
                </li>
                <li class="my-2 foter-item text-muted">Contact: 012345678</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <small>© 2024 All Rights Reserved. Entop Construction Pty Ltd</small>
      </div>
    </div>
  );
};

export default Footer;
