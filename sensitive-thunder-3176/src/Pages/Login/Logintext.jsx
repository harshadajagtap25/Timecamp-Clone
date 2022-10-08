import React from "react";
import "../../Styles/Login/Logintext.css";
import { Button } from "@chakra-ui/react";

const Logintext = () => {
  return (
    <div className="signcomp_text_container">
      <div className="signcomp_text_text">
        <p>TimeCamp Plugin for Google Chrome</p>
      </div>
      <div className="signcomp_text_track">
        <h1>Track time without leaving Chrome in 70+ online apps.</h1>
      </div>
      <div className="signcomp_text_button">
        <Button
          backgroundColor={"#25cf60"}
          borderRadius={"50px"}
          size={"lg"}
          color={"white"}
          className={"signcomp_text_button1"}
        >
          {" "}
          Add Time Camp For Chrome
        </Button>
        <div className="signtextcomp_logo_div">
          <div className="singntextcomp_symbol">
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/crozdesk.png"
              alt=""
            />
          </div>
          <div className="singntextcomp_symbol">
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/capterra.png"
              alt=""
              style={{ width: "100px", heigth: "100px" }}
            />
          </div>
          <div className="singntextcomp_symbol">
            {" "}
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/crowd.png"
              alt=""
            />
          </div>
          <div className="singntextcomp_symbol">
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/get-app.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logintext;
