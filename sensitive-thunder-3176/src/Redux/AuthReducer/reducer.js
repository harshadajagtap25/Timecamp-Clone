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
    case types.GET_Login_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_Login_SUCCESS:
      setdata("token", payload);
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case types.GET_Login_FAILURE:
      return { ...state, isError: true };
    case types.GET_Loginout_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_Loginout_SUCCESS:
      setdata("token", undefined);
      return { ...state, isLoading: false, isAuth: false, token: "" };
    case types.GET_Loginout_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
