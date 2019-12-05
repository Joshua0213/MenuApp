import axios from "axios";
import { GET_MENU, MENU_LOADING } from "./types";

//Get current profile
export const getMenuByHandle = handle => dispatch => {
  dispatch(setMenuLoading());

  console.log(handle);
  axios
    .get(`/menu/${handle}`)
    .then(res =>
      dispatch({
        type: GET_MENU,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

//
//
//
//
//
//
//Get current profile
// export const getCurrentMenu = () => dispatch => {
//   dispatch(setMenuLoading());
//   axios
//     .get("/dashboard")
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err => console.log(err));
// };
//
//
//
//Profile loading
export const setMenuLoading = () => {
  return {
    type: MENU_LOADING
  };
};
