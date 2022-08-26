import axios from "axios";
import { ApiServer } from "../../ApiConstant";
import {
  STUDENTS_LIST_FAILURE,
  STUDENTS_LIST_REQUEST,
  STUDENTS_LIST_SUCCESS,
} from "../constants/StudentsConstants";

export const listStudents = () => async (dispatch) => {
  try {
    dispatch({ type: STUDENTS_LIST_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo"))["access_token"]
        }`,
      },
    };
    console.log(config);
    const { data } = await axios.get(ApiServer + "/api/v1/devices/", config);

    dispatch({
      type: STUDENTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STUDENTS_LIST_FAILURE,
      payload: error.detail,
    });
  }
};
