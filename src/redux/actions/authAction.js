import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
} from "../reducer/authReducer";
export const loginAction = (data, navigate, from) => async (dispatch) => {
  console.log("data", data);

  dispatch({ type: LOGIN_REQUEST });

  axios
    .put(`http://localhost:5000/api/v1/login`, data)
    .then((res) => {
      if (res) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res,
        });
        Cookies.set("user", JSON.stringify(res.data), { expires: 7 });
        localStorage.setItem("token", res.data.token);
        navigate(from, { replace: true });
        toast.success(res.data.message);
      }
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILED, payload: err });
    });
};
export const registrationAction =
  (data, navigate, from) => async (dispatch) => {
    console.log("data", data);

    dispatch({ type: REGISTRATION_REQUEST });
    axios
      .post(`http://localhost:5000/api/v1/register`, data)
      .then((res) => {
        if (res) {
          dispatch({
            type: REGISTRATION_SUCCESS,
            payload: res,
          });
          Cookies.set("user", JSON.stringify(res.data), { expires: 7 });
          localStorage.setItem("token", res.data.token);
          navigate(from, { replace: true });
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        dispatch({ type: REGISTRATION_FAILED, payload: err });
        console.log(err);
      });
  };
 

