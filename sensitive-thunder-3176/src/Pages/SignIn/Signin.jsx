import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import LoginNav from "../Login/LoginNav";
import "../../Styles/Login/Login.css";
import { signin } from "../../Redux/AuthReducer/Action";
import { useNavigate } from "react-router-dom";
import { SIGNIN_SUCCESS } from "../../Redux/AuthReducer/Actiontype";
import { useDispatch } from "react-redux";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    localStorage.setItem("name", email);
    let obj = {
      email: email,
      password: password,
    };
    console.log("obj", obj);

    dispatch(signin(obj)).then((r) => {
      if (r === SIGNIN_SUCCESS) {
        navigate("/login");
      }
    });
  };

  return (
    <Box justifyContent={"center"} m={"auto"}>
      <LoginNav />
      <Box
        w={"25%"}
        h={"auto"}
        pt={"5px"}
        justifyContent={"center"}
        m={"auto"}
        mt={"80px"}
        borderRadius={30}
        boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px"}
      >
        <Box mt={"20px"} textAlign={"center"}>
          <Text fontSize={"37px"} fontWeight={"700"}>
            Start tracking time
          </Text>
          <Box justifyContent={"center"} m={"auto"} mt={"15px"} w={"70%"}>
            <Text color={"#767676"} fontSize={"23px"} fontWeight={"700"}>
              Create an account and start with a free 14-day trial
            </Text>
          </Box>
          <Text mt={"10px"} color={"#767676"} fontSize={"15px"}>
            All features. No credit card required
          </Text>

          <Flex
            w={"70%"}
            justifyContent={"center"}
            m={"auto"}
            mt={5}
            pl={50}
            pr={50}
            border={"1px solid #e9e9e9"}
            borderRadius={6}
          >
            <Box>
              <Image
                boxSize={"35px"}
                src={
                  "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png"
                }
              ></Image>
            </Box>
            <Spacer />
            <Text fontSize={13} mt={1.5} fontWeight={500} color={"#767676"}>
              Sign up with Google
            </Text>
          </Flex>
        </Box>
        <Box justifyContent={"center"} m={"auto"} w={"5%"} mt={5} mb={5}>
          <Text fontSize={13}>Or</Text>
        </Box>

        <Box w={"70%"} justifyContent={"center"} m={"auto"}>
          <Box mb={4}>
            <Input
              placeholder="Email"
              size="sm"
              borderRadius={7}
              h={10}
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box mb={4}>
            <Input
              placeholder="Password"
              size="sm"
              borderRadius={7}
              h={10}
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box mb={4}>
            <Input
              placeholder="Phone (Optional)"
              size="sm"
              borderRadius={7}
              h={10}
              
            />
          </Box>

          <Box w={"55%"} justifyContent={"center"} m={"auto"}>
            <Button
              mt={5}
              w={"100%"}
              borderRadius={50}
              bg={"#25cf60"}
              color={"white"}
              h={"50px"}
              fontSize={14}
              onClick={handleSignUp}
            >
              Sign up for free
            </Button>
          </Box>
        </Box>
        <Box w={"70%"} justifyContent={"center"} m={"auto"} mt={5} pb={"30px"}>
          <Text fontSize={13} color={"#767676"}>
            By signing up you agree to our Terms of Service and Privacy Policy
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
