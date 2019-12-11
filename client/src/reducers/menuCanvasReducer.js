import { GET_MENU_BUILT, MENU_LOADING } from "../actions/types";

const initialState = {
  menuObj: [{ Title: "Page1" }],
  loadingObj: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MENU_LOADING:
      return {
        ...state,
        loadingObj: true
      };
    case GET_MENU_BUILT:
      return {
        ...state,
        menuObj: action.payload,
        loadingObj: false
      };
    default:
      return state;
  }
}
