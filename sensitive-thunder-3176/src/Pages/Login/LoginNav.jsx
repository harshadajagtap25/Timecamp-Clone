import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Login/Login.css";

const SignNav = () => {
  const navigate = useNavigate();
  const hanldeclick = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://app.timecamp.com//res/css/images/greenbranding/TC-logo.svg"
          alt=""
          onClick={hanldeclick}
        />
      </div>
      <div></div>
    </div>
  );
};

export default SignNav;
