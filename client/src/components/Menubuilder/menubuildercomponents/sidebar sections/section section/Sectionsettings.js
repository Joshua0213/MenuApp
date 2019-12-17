import React, { Component } from "react";
import { connect } from "react-redux";

import { renameHeader } from "../../../../../actions/menubuilderActions";

import TextFieldGroupSmall from "../../../../Common/TextFieldGroupSmall";
import Backbutton from "../../../../Common/Backbutton";
import Sectionbackgroundsettings from "./Sectionbackgroundsettings";
import Sectiondisplaysettings from "./Sectiondisplaysettings";
import Sectioncontentsettings from "./Sectioncontentsettings";

class Sectionsettings extends Component {
  constructor() {
    super();
    this.state = {
      newHeader: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitNewHeader = this.submitNewHeader.bind(this);
  }

  //renameHeader = (
  // menuObj,
  // newHeader,
  // pageLocation,
  // sectionLocation,

  submitNewHeader() {
    this.props.renameHeader(
      this.props.menuArr.menuArr,
      this.state.newHeader,
      this.props.menuArr.pageFocus,
      this.props.sectionLocation
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    let renameSectionClick = this.submitNewHeader;
    let pageLocation = this.props.menuArr.pageFocus;
    let { sectionLocation } = this.props;
    let sectionType = this.props.menuArr.menuArr[pageLocation].Content[
      sectionLocation
    ].Type;
    let typeCapitalized =
      sectionType.charAt(0).toUpperCase() + sectionType.slice(1);

    let saveclassName =
      "bg-green-300 hover:bg-green-400 py-px text-green-600 hover:text-green-800 px-2 m-px rounded border-2 border-gray-400 hover:border-gray-500 cursor-pointer";
    if (this.state.newHeader === "") {
      saveclassName =
        "bg-gray-300 py-px text-gray-600 px-2 m-px rounded border-2 border-gray-400 cursor-not-allowed";
      renameSectionClick = null;
    }

    let content = (
      <div className="rounded flex flex-col items-center py-1 pb-2">
        <div className="w-full flex">
          <div className="ml-4 ">
            <Backbutton toggle={this.props.toggleSectionSettings} />
          </div>
          <span className="text-center text-lg ml-4">
            {typeCapitalized + " Settings"}
          </span>
        </div>
        <div className="min-h-64 text-center flex flex-col items-center w-full border-b-2 border-gray-500  pb-2 ">
          <div className='my-2 bg-gray-300 border-gray-500 border-4 flex-grow flex mx-1 rounded flex justify-center p-px"'>
            {
              this.props.menuArr.menuArr[pageLocation].Content[sectionLocation]
                .Value
            }
          </div>
          <div className="flex flex-rows">
            <TextFieldGroupSmall
              className=""
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
                onClick={renameSectionClick}
              >
                <path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 0 1 .27-1.951 1.392 1.392 0 0 1 1.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 0 1 1.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 0 1-1.12.656c-.022.002-.042.002-.064.002z" />
              </svg>
            </div>
          </div>

          <Sectiondisplaysettings
            pageLocation={pageLocation}
            sectionLocation={sectionLocation}
          />
          <Sectioncontentsettings
            pageLocation={pageLocation}
            sectionLocation={sectionLocation}
          />
          <Sectionbackgroundsettings
            pageLocation={pageLocation}
            sectionLocation={sectionLocation}
          />
        </div>
      </div>
    );
    return <div className="w-full bg-gray-300 min-h-64 rounded">{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { renameHeader })(Sectionsettings);
