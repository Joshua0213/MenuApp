import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Navbar from "./components/layout/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Footer from "./components/layout/Footer/Footer";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";
import Menu from "./components/Menu/Menu";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/Common/PrivateRoute";
import { clearCurrentProfile } from "./actions/dashboardActions";
import MenuBuilderwrapper from "./components/Menubuilder/MenuBuilderwrapper";

//Check for token
if (localStorage.jwtToken) {
  const decoded = jwt_decode(localStorage.jwtToken);
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    localStorage.removeItem("jwtToken");
    store.dispatch(logoutUser);
    //Clear current profile
    store.dispatch(clearCurrentProfile());
    //Redirect
    window.location.href = "/";
  }
  //Set the auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token for user info
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //Check for expired token
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landingpage} />
          <div className="Routecontainer">
            <Route exact path="/register" component={Register} />
            <Route exact path="/menu/:handle" component={Menu} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/menubuilder"
                component={MenuBuilderwrapper}
              />
            </Switch>
          </div>
          <div className=" z-30 relative ">
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
