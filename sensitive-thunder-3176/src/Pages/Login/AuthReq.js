import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const AuthReq = ({ children }) => {
  const navigate = useNavigate();

  const Authenicate = useSelector((store) => store.AuthReducer);
  // console.log("abc", Authenicate);
  if (!Authenicate.isAuth) {
    return <Navigate to={"/signin"} />;
  }
  return children;
};

export default AuthReq;
