import {
  SET_PAGE_WIDTH,
  SET_PAGE_ARRAY,
  SET_PAGE_RENDER
} from "../actions/types";

const initialState = {
  pageWidth: 350,
  pageArray: [],
  pageRender: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_WIDTH:
      return {
        ...state,
        pageWidth: action.payload
      };
    case SET_PAGE_ARRAY:
      return {
        ...state,
        pageArray: action.payload
      };
    case SET_PAGE_RENDER:
      return {
        ...state,
        pageRender: action.payload
      };
    default:
      return state;
  }
}
