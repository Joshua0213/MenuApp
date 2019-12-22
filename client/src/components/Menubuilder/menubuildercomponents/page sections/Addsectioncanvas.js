import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createNewSpacer,
  createNewContainer
} from "../../../../actions/menubuilderActions";

import Addsectionbutton from "./AddCanvas components/Addsectionbutton";
import Backbutton from "../../../Common/Backbutton";

class Addsectioncanvas extends Component {
  constructor(props) {
    super(props);
    this.createSpacer = this.createSpacer.bind(this);
    this.createContainer = this.createContainer.bind(this);
  }

  createSpacer() {
    this.props.toggleCanvas();
    this.props.createNewSpacer(
      this.props.menuArr.menuArr,
      this.props.pageLocation,
      this.props.sectionLocation
    );
  }

  createContainer() {
    this.props.toggleCanvas();
    this.props.createNewContainer(
      this.props.menuArr.menuArr,
      this.props.pageLocation,
      this.props.sectionLocation
    );
  }

  render() {
    return (
      <div className="rounded-lg w-8/12 z-40 bg-white flex flex-col items-center border-4 p-1 border-blue-300 relative pb-4">
        <div className="flex justify-around py-4 w-11/12">
          <Backbutton toggle={this.props.toggleCanvas} />
          <div className="text-xl border-4 border-gray-400 py-1 px-4 bg-gray-200 rounded-full">
            New Section
          </div>
          <div className="py-px px-2 m-px rounded border-2 border-white">
            <div className="h-6 w-6"> </div>
          </div>
        </div>
        <div className="bg-gray-500 h-px w-full mb-4"></div>
        <div className="flex flex-row justify-around w-11/12 items-center">
          <Addsectionbutton
            name={"Header"}
            openSectionToAdd={this.props.openSectionToAdd}
          />
          <div
            className="cursor-pointer bg-blue-300 rounded-lg flex-grow mx-2 hover:bg-blue-500 text-base text-center py-2 px-6 z-50"
            onClick={this.createSpacer}
          >
            Spacer
          </div>
          <div
            className="cursor-pointer bg-blue-300 rounded-lg flex-grow mx-2 hover:bg-blue-500 text-base text-center py-2 px-6 z-50"
            onClick={this.createContainer}
          >
            Container
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {
  createNewSpacer,
  createNewContainer
})(Addsectioncanvas);
