import {
  GET_MENU_ARR,
  SET_SIDEBAR_WIDTH,
  SET_MENU_ARRAY,
  GET_PAGE_FOCUS,
  SET_NEED_SAVE,
  PAGE_SAVED,
  TOGGLE_ICONS,
  ADD_TO_HISTORY,
  SET_SECTION_FOCUS
} from "../actions/types";

const initialState = {
  menuArr: [],
  loadingArr: true,
  pageFocus: 0,
  sectionFocus: 0,
  sidebarWidth: 300,
  hideIcons: false,
  needToSave: false,
  historyArr: []
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
    case SET_SECTION_FOCUS:
      return {
        ...state,
        sectionFocus: action.payload
      };
    case SET_SIDEBAR_WIDTH:
      return {
        ...state,
        sidebarWidth: action.payload
      };
    case SET_NEED_SAVE:
      return {
        ...state,
        needToSave: true
      };
    case PAGE_SAVED:
      return {
        ...state,
        needToSave: false
      };
    case TOGGLE_ICONS:
      return {
        ...state,
        hideIcons: action.payload
      };
    case ADD_TO_HISTORY:
      return {
        ...state,
        historyArr: action.payload
      };
    default:
      return state;
  }
}
