import {
  STUDENTS_LIST_REQUEST,
  STUDENTS_LIST_SUCCESS,
  STUDENTS_LIST_FAILURE,
} from "../constants/StudentsConstant";

export const studentListReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case STUDENTS_LIST_REQUEST:
      return { loading: true, students: [] };

    case STUDENTS_LIST_SUCCESS:
      return { loading: false, students: action.payload };

    case STUDENTS_LIST_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
