import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register User
export const registerUser = userData => dispatch => {
  axios
    .post("/users/register", userData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login User - Get Token
export const loginUser = userData => dispatch => {
  axios
    .post("/users/login", userData)
    .then(res => {
      //Save token to local
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      //Set token to Auth header
      setAuthToken();
      //Decode token for user data
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set logged in user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//Log user out

export const logoutUser = () => dispatch => {
  //Remove token from local
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} and isAuthenticated to false
  dispatch(setCurrentUser({}));
};
