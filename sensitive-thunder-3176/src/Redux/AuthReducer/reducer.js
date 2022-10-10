import { getLocalData, setdata } from "../../Pages/Utils/Savedata";
import * as types from "./Actiontype";
const intial = {
  isAuth: false,
  token: getLocalData("token") || undefined,
  isLoading: false,
  isError: false,
};

export const reducer = (state = intial, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SIGNIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.SIGNIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case types.SIGNIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.GET_Login_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_Login_SUCCESS:
      setdata("token", payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload,
      };

    case types.GET_Login_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };

    
    case types.GET_Loginout_SUCCESS:
      setdata("token", "");
      return { ...state, isLoading: false, isAuth: false, token: "" };
    
    default:
      return state;
  }
};
