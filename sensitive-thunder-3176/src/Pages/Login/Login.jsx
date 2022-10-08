import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import LoginNav from "./LoginNav";
import Loginform from "./Loginform";

const Login = () => {
  return (
    <Box width={"100%"}>
      <LoginNav />
      <Loginform />
    </Box>
  );
};

export default Login;
