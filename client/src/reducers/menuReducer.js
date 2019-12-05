import { GET_MENU, MENU_LOADING } from "../actions/types";

const initialState = {
  mainHeader: "",
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MENU_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MENU:
      return {
        ...state,
        mainHeader: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
