import React, { Component } from "react";

import Sectionbackgroundsettings from "./Sectionbackgroundsettings";
import Sectiondisplaysettings from "./Sectiondisplaysettings";
import Sectioncontentsettings from "./Sectioncontentsettings";

export default class Noncontainersettings extends Component {
  render() {
    return (
      <div className="w-full">
        <Sectiondisplaysettings
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
        />
        <Sectioncontentsettings
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
        />
        <Sectionbackgroundsettings
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
        />
      </div>
    );
  }
}
