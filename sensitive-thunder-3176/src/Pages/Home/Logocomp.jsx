import React from "react";
import "../../Styles/Home/Logo.css";
const Logocomp = () => {
  return (
    <div className="logo_container">
      <div className="logo_div">
        <div className="image_div">
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/features/crozdesk.png"
            alt=""
          />
        </div>
        <div className="image_div">
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/features/capterra.png"
            alt=""
            style={{ width: "100px", heigth: "100px" }}
          />
        </div>
        <div className="image_div">
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/features/crowd.png"
            alt=""
          />
        </div>
        <div className="image_div">
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/features/get-app.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Logocomp;
