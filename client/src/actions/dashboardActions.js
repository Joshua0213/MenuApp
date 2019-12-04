import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  SET_PROFILE,
  CLEAR_CURRENT_PROFILE
} from "./types";

//Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/dashboard")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

//Set current profile
export const setCurrentProfile = data => dispatch => {
  axios
    .post("/dashboard", data)
    .then(res =>
      dispatch({
        type: SET_PROFILE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));

  return {
    type: SET_PROFILE,
    payload: data
  };
};

//Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

//Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
