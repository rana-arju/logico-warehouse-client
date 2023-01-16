import axios from "axios";
import { toast } from "react-toastify";
import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
} from "../reducer/registrationReducer";

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
