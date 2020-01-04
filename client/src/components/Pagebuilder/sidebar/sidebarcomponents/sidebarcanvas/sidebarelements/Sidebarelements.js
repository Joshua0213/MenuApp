import React, { Component } from "react";

import Headerelement from "./Headerelement";
import Containerelement from "./Containerelement";

export default class Sidebarelements extends Component {
  render() {
    return (
      <div
        id="Sidebar_Elements"
        style={{
          display: "flex",
          padding: "5px",
          flexWrap: "wrap"
        }}
      >
        {" "}
        <Headerelement />
        <Containerelement />
      </div>
    );
  }
}
