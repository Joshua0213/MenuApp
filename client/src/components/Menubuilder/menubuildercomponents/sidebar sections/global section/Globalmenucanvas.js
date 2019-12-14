import React, { Component } from "react";

import Colorpicker from "../../../../Common/Colorpicker";

export default class Globalmenucanvas extends Component {
  render() {
    return (
      <div className="w-11/12 h-64 overflow-auto bg-gray-100 my-1 rounded-lg border-2 border-gray-400 hover:border-gray-500">
        {this.props.focus}
        <Colorpicker />
      </div>
    );
  }
}
