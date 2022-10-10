import React, { useState } from "react";
import "../../Styles/Login/Login.css";
import { Button, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import Logintext from "./Logintext";
import { Getlogin } from "../../Redux/AuthReducer/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_Login_SUCCESS } from "../../Redux/AuthReducer/Actiontype";

const Loginform = () => {
  const [authdata, setAuthdata] = React.useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const data = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();

  const googleclick = () => {};

  const handlesubmit = () => {
    if (email && password) {
      localStorage.setItem("email", email);
      var obj1 = {
        email,
        password,

      };
      console.log(obj1);
      dispatch(Getlogin(obj1)).then((r) => {
        if (r === GET_Login_SUCCESS) 
        navigate("/timesheet/timesheet");
      });
    }
  };
  React.useEffect(() => {
    console.log(data.isAuth);
    if (data.isAuth) {
      console.log("homepage");
      navigate("/timesheet/timesheet");
    }
  }, [data.isAuth]);
  return (
    <div className="container_form">
      <div className="text">
        <Logintext />
      </div>

      <div className="form">
        <div className="heading">
          <Heading as="h1" size="md" noOfLines={1} textAlign={"center"}>
            Log in to TimeCamp
          </Heading>
        </div>
        <div className="googlelog" onClick={googleclick}>
          <div className="child">
            <div className="freelogo">
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png"
                alt=""
              />
            </div>
            <div className="textitem">
              <h1>Login With Google</h1>
            </div>
          </div>
        </div>

        <div className="heading">
          <FormControl isRequired>
            <Input
              placeholder="Email"
              type={"email"}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FormControl>
        </div>
        <div className="heading">
          <FormControl isRequired>
            <Input
              placeholder="Password"
              type={"password"}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormControl>
        </div>

        <div id="head">
          <Text color={"#25cf60"}>Forget Password</Text>
        </div>

        <div className="heading">
          <Button
            backgroundColor={"#25cf60"}
            size="md"
            height="48px"
            width="120px"
            color="white"
            onClick={handlesubmit}
            variant={"solid"}
            borderRadius={50}
          >
            Log In
          </Button>
        </div>

        <div className="footer_div">
          <div className="footer">
            {" "}
            <Text color={"#25cf60"} className="smtext">
              No account? Sign Up{" "}
            </Text>
          </div>
          <div className="footer">
            {" "}
            <Text className="smtext" color={"#25cf60"}>
              Login With SSO{" "}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
