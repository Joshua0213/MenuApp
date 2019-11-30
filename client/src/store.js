import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

let middleparam = applyMiddleware(...middleware);

if (process.env.NODE_ENV === "production") {
  middleparam = applyMiddleware(...middleware);
} else {
  middleparam = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = createStore(rootReducer, initialState, middleparam);

export default store;
