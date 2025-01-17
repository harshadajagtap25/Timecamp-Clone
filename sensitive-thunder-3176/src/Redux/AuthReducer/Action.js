import * as types from "./Actiontype";
import axios from "axios";

const signin = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNIN_REQUEST });

  return axios
    .post(`https://reqres.in/api/register`, payload)
    .then((r) => {
      dispatch({ type: types.SIGNIN_SUCCESS, payload: r.data });
      // console.log("Reg Success");
      return types.SIGNIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.SIGNIN_FAILURE, payload: e });
      return types.SIGNIN_FAILURE;
    });
};

const Getlogin = (payload) => (dispatch) => {
  dispatch({ type: types.GET_Login_REQUEST });

  return axios
    .post("https://reqres.in/api/login", payload)
    .then((r) => {
      dispatch({ type: types.GET_Login_SUCCESS, payload: r.data.token });
      // console.log(r.data)
      return types.GET_Login_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.GET_Login_FAILURE });
      return types.GET_Login_FAILURE;
    });
};

const Getlogout = () => (dispatch) => {
  dispatch({ type: types.GET_Loginout_REQUEST });

  return dispatch({ type: types.GET_Loginout_SUCCESS, payload: undefined });
  // return dispatch({ type: LOGOUT_SUCCESS });
};

export { signin, Getlogout, Getlogin };
