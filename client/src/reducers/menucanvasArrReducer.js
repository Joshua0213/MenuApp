import {
  GET_MENU_ARR,
  SET_SIDEBAR_WIDTH,
  SET_MENU_ARRAY,
  GET_PAGE_FOCUS
} from "../actions/types";

const initialState = {
  menuArr: [],
  loadingArr: true,
  pageFocus: 0,
  sidebarWidth: 350
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MENU_ARR:
      return {
        ...state,
        menuArr: action.payload,
        loadingArr: false,
        needToSave: false
      };
    case SET_MENU_ARRAY:
      return {
        ...state,
        menuArr: action.payload,
        loadingArr: false,
        needToSave: true
      };
    case GET_PAGE_FOCUS:
      return {
        ...state,
        pageFocus: action.payload
      };
    case SET_SIDEBAR_WIDTH:
      return {
        ...state,
        sidebarWidth: action.payload
      };
    default:
      return state;
  }
}
