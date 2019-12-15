import { GET_GLOBALS_OBJECT, SET_GLOBALS_OBJECT } from "../actions/types";

const initialState = {
  globalStyles: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GLOBALS_OBJECT:
      return {
        ...state,
        globalStyles: action.payload
      };
    case SET_GLOBALS_OBJECT:
      return {
        ...state,
        globalStyles: action.payload
      };
    default:
      return state;
  }
}
