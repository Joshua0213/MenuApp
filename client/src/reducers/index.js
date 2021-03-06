import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import dashboardReducer from "./dashboardReducer";
import menuReducer from "./menuReducer";
import menuCanvasReducer from "./menuCanvasReducer";
import menucanvasArrReducer from "./menucanvasArrReducer";
import globalstylesReducer from "./globalstylesReducer";
import treefocusReducer from "./treefocusReducer";
import pageReducer from "./pageReducer";
import pagemenuReducer from "./pagemenuReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  menu: menuReducer,
  dashboard: dashboardReducer,
  menubuilt: menuCanvasReducer,
  menuarr: menucanvasArrReducer,
  globalstyles: globalstylesReducer,
  treefocus: treefocusReducer,
  page: pageReducer,
  pagemenu: pagemenuReducer
});
