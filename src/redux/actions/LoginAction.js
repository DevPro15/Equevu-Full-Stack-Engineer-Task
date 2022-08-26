import axios from "axios";
import { ApiServer } from "../../ApiConstant.js";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../constants/LoginConstant";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    // const config = {
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // };
    //console.log(email);
    //console.log(password);

    var bodyFormData = new FormData();
    bodyFormData.append("username", email);
    bodyFormData.append("password", password);

    const { data } = await axios.post(
      ApiServer + "/api/v1/login/access-token",
      bodyFormData
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("userRole", JSON.stringify(data.user_role));
    console.log("userInfo: " + localStorage.getItem("userInfo"));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.detail,
    });
    console.log(error.response.status);
    localStorage.setItem("error", JSON.stringify(error.response.status));
  }
};
