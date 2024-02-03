import React from "react";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import MarginIcon from "@mui/icons-material/Margin";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
const Cards = () => {
  return (
    <div className="container">
      <div class="row py-5">
        <div class="col-12 col-md-4 ">
          <div
            className="box-color d-flex flex-column text-center p-5 border border-2 rounded-2 py-5 bg-light
            m-1"
          >
            <div className="text-center">
              <HouseSidingIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "8rem",
                  margin: "auto", // Center the icon horizontally
                }}
              />
            </div>
            <span>
              <h3 className="text-bold  py-1">Custom & housing</h3>
            </span>
          </div>
        </div>{" "}
        <div class="col-12 col-md-4 ">
          <div
            className="box-color d-flex flex-column text-center p-5 border border-2 rounded-2 py-5 bg-light
            m-1"
          >
            <div className="text-center">
              <MarginIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "8rem",
                  margin: "auto", // Center the icon horizontally
                }}
              />
            </div>
            <span>
              <h3 className="text-bold  py-1">Custom & housing</h3>
            </span>
          </div>
        </div>{" "}
        <div class="col-12 col-md-4 ">
          <div
            className="box-color d-flex flex-column text-center p-5 border border-2 rounded-2 py-5 bg-light
            m-1"
          >
            <div className="text-center">
              <CastForEducationIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "8rem",
                  margin: "auto", // Center the icon horizontally
                }}
              />
            </div>
            <span>
              <h3 className="text-bold py-1">Custom & housing</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
