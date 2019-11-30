import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Footer from "./components/layout/Footer/Footer";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landingpage} />
        <div className="routecontaner">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
