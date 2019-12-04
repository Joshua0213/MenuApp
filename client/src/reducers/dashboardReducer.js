import {
  CLEAR_CURRENT_PROFILE,
  GET_PROFILE,
  PROFILE_LOADING,
  SET_PROFILE
} from "../actions/types";

const initialState = {
  mainHeader: "",
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        mainHeader: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    case SET_PROFILE:
      return {
        ...state,
        mainHeader: action.payload
      };
    default:
      return state;
  }
}
