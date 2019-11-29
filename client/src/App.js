import React from "react";
import "./App.css";
/*import Navbar from "./components/layout/Navbar";*/
/*import Footer from "./components/layout/Footer";*/
import Navbar from "./components/layout/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landingpage />
      <Footer />
    </div>
  );
}

export default App;
