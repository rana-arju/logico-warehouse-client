import axios from "axios";
import { toast } from "react-toastify";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../reducer/loginReducer";
export const loginAction = (data, navigate, from) => async (dispatch) => {
  console.log("data",data);

  dispatch({ type: LOGIN_REQUEST });

  axios
    .put(`http://localhost:5000/api/v1/login`, data)
    .then((res) => {
      if (res) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res,
        });
        localStorage.setItem("token", res.data.token);
          navigate(from, { replace: true });
        toast.success(res.data.message);
      }
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILED, payload: err });
    });
};
