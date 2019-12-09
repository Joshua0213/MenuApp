import { GET_MENU_BUILT, MENU_LOADING } from "../actions/types";

const initialState = {
  menuObj: [{ Title: "Page1" }],
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MENU_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MENU_BUILT:
      return {
        ...state,
        menuObj: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
