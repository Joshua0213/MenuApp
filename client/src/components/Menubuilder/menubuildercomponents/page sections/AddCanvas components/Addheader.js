import React, { Component } from "react";
import { connect } from "react-redux";

import { createNewHeader } from "../../../../../actions/menubuilderActions";

import Backbutton from "../../../../Common/Backbutton";
import Exitbutton from "../../../../Common/Exitbutton";
import TextFieldGroupSmall from "../../../../Common/TextFieldGroupSmall";

class Addheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newHeader: "",
      password: "",
      errors: {}
    };
    this.goBack = this.goBack.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitNewHeader = this.submitNewHeader.bind(this);
  }

  submitNewHeader() {
    this.props.toggleCanvas();
    this.props.createNewHeader(
      this.props.menuArr.menuArr,
      this.state.newHeader,
      this.props.pageLocation,
      this.props.location
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  goBack() {
    this.props.openSectionToAdd("start");
  }

  render() {
    let submitHeader = this.submitNewHeader;
    let saveclassName =
      "bg-green-300 hover:bg-green-400 py-px text-green-600 hover:text-green-800 px-2 m-px rounded border-2 border-gray-400 hover:border-gray-500 cursor-pointer";
    if (this.state.newHeader === "") {
      saveclassName =
        "bg-gray-300 py-px text-gray-600 px-2 m-px rounded border-2 border-gray-400 cursor-not-allowed";
      submitHeader = null;
    }
    return (
      <div className="rounded-lg w-8/12 z-40 bg-white flex flex-col items-center border-4 border-blue-300 relative pb-4">
        <div className="flex justify-around w-11/12 py-4">
          <Backbutton toggle={this.goBack} />
          <div className="text-xl border-4 border-gray-400 py-1 px-4 bg-gray-200 rounded-full">
            New Header
          </div>
          <Exitbutton toggle={this.props.toggleCanvas} />
        </div>
        <div className="bg-gray-500 h-px w-full mb-4"></div>
        <div className="flex text-lg flex-row justify-center content-center p-2 w-11/12 items-center">
          <TextFieldGroupSmall
            className="text-lg"
            placeholder="Header"
            name="newHeader"
            type="name"
            value={this.state.newHeader}
            onChange={this.onChange}
          />
          <div className={saveclassName}>
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={submitHeader}
            >
              <path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 0 1 .27-1.951 1.392 1.392 0 0 1 1.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 0 1 1.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 0 1-1.12.656c-.022.002-.042.002-.064.002z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { createNewHeader })(Addheader);
