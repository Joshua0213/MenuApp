import {
  SET_PAGE_ARRAY,
  SET_PAGE_RENDER,
  SET_PAGE_BRIGHTNESS,
  SET_PAGE_SIZE,
  SET_SIDEBAR_DISPLAY,
  SET_PAGE_FOCUS,
  SET_PAGE_DRAGGING,
  SET_PAGE_SAVE,
  SET_SETTINGS_FOCUS,
  SET_IMAGE_ARRAY
} from "../actions/types";

const initialState = {
  pageArray: [],
  pageRender: null,
  brightness: "light",
  displaySize: "large",
  sidebarDisplay: "Elements",
  pageFocus: 0,
  isDragging: null,
  needToSave: false,
  settingsFocus: null,
  imageArray: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_ARRAY:
      return {
        ...state,
        pageArray: action.payload
      };
    case SET_IMAGE_ARRAY:
      return {
        ...state,
        imageArray: action.payload
      };
    case SET_SETTINGS_FOCUS:
      return {
        ...state,
        settingsFocus: action.payload
      };
    case SET_PAGE_SAVE:
      return {
        ...state,
        needToSave: action.payload
      };
    case SET_PAGE_RENDER:
      return {
        ...state,
        pageRender: action.payload
      };
    case SET_PAGE_BRIGHTNESS:
      return {
        ...state,
        brightness: action.payload
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        displaySize: action.payload
      };
    case SET_SIDEBAR_DISPLAY:
      return {
        ...state,
        sidebarDisplay: action.payload
      };
    case SET_PAGE_FOCUS:
      return {
        ...state,
        pageFocus: action.payload
      };
    case SET_PAGE_DRAGGING:
      return {
        ...state,
        isDragging: action.payload
      };
    default:
      return state;
  }
}
