import React from "react";
import "../../Styles/Login/Logout.css";
import { Button } from "@chakra-ui/react";
import { Getlogout } from "../../Redux/AuthReducer/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const data = useSelector((store) => store.AuthReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(Getlogout());
    if (data.isAuth) {
      navigate("/Signin");
    }
  };

  React.useState(() => {}, [data.isAuth]);
  return (
    <div className="container_logout">
      <div className="logout_div">
        <div className="image_logout">
          <img
            src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
            alt=""
          />
        </div>
        <div className="chakra_button_logout">
          <Button colorScheme="teal" size="lg" onClick={handleclick}>
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
