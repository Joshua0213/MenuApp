import { GET_MENU_ARRAY, SET_PAGE_ARRAY } from "../actions/types";

const initialState = {
  pageArray: null,
  pageLoading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MENU_ARRAY:
      return {
        ...state,
        pageArray: action.payload
      };
    case SET_PAGE_ARRAY:
      return {
        ...state,
        pageLoading: false
      };
    default:
      return state;
  }
}
