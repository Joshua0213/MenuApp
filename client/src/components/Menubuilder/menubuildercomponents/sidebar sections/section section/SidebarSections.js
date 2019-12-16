import React, { Component } from "react";
import { connect } from "react-redux";

import { setSectionFocus } from "../../../../../actions/menubuilderActions";

import SidebarSectionsItem from "./SidebarSectionsItem";
import Sectionitemmanipulator from "./Sectionitemmanipulator";
import Sectionsettings from "./Sectionsettings";

class SidebarSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      showOptions: false
    };
    this.toggleClick = this.toggleClick.bind(this);
    this.toggleShowSettings = this.toggleShowSettings.bind(this);
    this.changeSectionFocus = this.changeSectionFocus.bind(this);
    this.setSectionFocus = this.setSectionFocus.bind(this);
  }

  changeSectionFocus(newFocus) {
    this.setState(() => {
      return { focus: newFocus };
    });
  }

  setSectionFocus(newFocus) {
    if (newFocus === this.props.menuArr.sectionFocus) {
      this.props.setSectionFocus(null);
    } else {
      this.props.setSectionFocus(newFocus);
    }
  }

  toggleClick() {
    this.setState(prevState => {
      return { hidden: !prevState.hidden };
    });
  }

  toggleShowSettings() {
    this.setState(prevState => {
      return { showOptions: !prevState.showOptions };
    });
  }

  render() {
    const sections = this.props.menuArr.menuArr[
      this.props.menuArr.pageFocus
    ].Content.map((section, index) => {
      return (
        <div id="Navbarcanvas_container" key={index}>
          <SidebarSectionsItem
            Value={section.Value}
            Type={section.Type}
            sectionLocation={this.props.menuArr.sectionFocus}
            myLocation={index}
            changeFocus={this.setSectionFocus}
          />
        </div>
      );
    });
    let content;
    let pageLocation = this.props.menuArr.pageFocus;
    let title = this.props.menuArr.menuArr[pageLocation].Title;
    if (this.state.hidden === true) {
      content = (
        <div
          className="bg-gray-300 border-gray-500 border-2 cursor-pointer  hover:border-gray-600 h-7 w-11/12 mt-1 rounded-full flex justify-around"
          onClick={this.toggleClick}
        >
          <div className="">{title}</div>
        </div>
      );
    } else {
      if (!this.state.showOptions) {
        content = (
          <div className="bg-gray-300 mt-1  hover:border-gray-600 border-gray-500 border-2 w-11/12 rounded-lg flex flex-col items-center ">
            <div
              className="cursor-pointer bg-gray-300 rounded-full border-2 border-gray-500 hover:border-gray-600 w-11/12 text-center mt-1"
              onClick={this.toggleClick}
            >
              <div className="">{title}</div>
            </div>
            <div className="w-11/12 h-64 overflow-auto bg-gray-100 my-1 rounded-lg border-2 border-gray-400 hover:border-gray-500">
              {sections}
            </div>
            <Sectionitemmanipulator
              sectionFocus={this.props.menuArr.sectionFocus}
              pageFocus={pageLocation}
              changeFocus={this.setSectionFocus}
              toggleShowSettings={this.toggleShowSettings}
            />
          </div>
        );
      } else {
        //Show Section Options
        content = (
          <div className="bg-gray-300 mt-1 hover:border-gray-600 border-gray-500 border-2 w-11/12 rounded-lg flex flex-col items-center ">
            <Sectionsettings
              sectionLocation={this.props.menuArr.sectionFocus}
              toggleSectionSettings={this.toggleShowSettings}
            />
          </div>
        );
      }
    }

    return <div className="w-full flex justify-center ">{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { setSectionFocus })(SidebarSections);
