import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import dashboardReducer from "./dashboardReducer";
import menuReducer from "./menuReducer";
import menuCanvasReducer from "./menuCanvasReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  menu: menuReducer,
  dashboard: dashboardReducer,
  menubuilt: menuCanvasReducer
});
