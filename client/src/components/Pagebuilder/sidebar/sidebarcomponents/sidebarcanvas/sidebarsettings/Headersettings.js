import React, { Component } from "react";
import { connect } from "react-redux";

import { updateHeader } from "../../../../../../actions/pageActions";

import Justifyicons from "../../sidebaricons/justifyicons/Justifyicons";
import Marginsettings from "./settingscomponents/Marginsettings";
import Paddingsettings from "./settingscomponents/Paddingsettings";

class Headersettings extends Component {
  constructor() {
    super();
    this.state = {
      header: "",
      prevHeader: "",
      section: null
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.newHeader = this.newHeader.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.preRender = this.preRender.bind(this);
    this.changeSetting = this.changeSetting.bind(this);
  }

  preRender() {
    let { settingsFocus, pageArray, pageFocus } = this.props.Page;
    let section = pageArray[pageFocus].Sections[settingsFocus[0]];
    if (settingsFocus.length > 1) {
      section = section.Content[settingsFocus[1]];
      if (settingsFocus.length > 2) {
        section = section.Content[settingsFocus[2]];
      }
    }
    this.setState(() => {
      return {
        prevHeader: section.Value,
        header: section.Value,
        section: section
      };
    });
  }

  componentDidMount() {
    this.preRender();
  }

  changeSetting(setting, value) {}

  onFocus() {
    this.preRender();
  }

  newHeader(newHeader) {
    let { Page, updateHeader } = this.props;
    let { settingsFocus } = Page;
    let { pageArray, pageFocus } = Page;
    updateHeader(pageArray, pageFocus, settingsFocus, newHeader);
  }

  onChange(e) {
    this.setState({ header: e.target.value });
    this.newHeader(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.header !== "") {
      this.setState(() => {
        return {
          prevHeader: this.state.header
        };
      });
      let { Page, updateHeader } = this.props;
      let { pageArray, pageFocus, settingsFocus } = Page;
      updateHeader(pageArray, pageFocus, settingsFocus, this.state.header);
    }
  }

  onBlur() {
    this.setState({ header: this.state.prevHeader });
    this.newHeader(this.state.prevHeader);
  }

  render() {
    let settings;
    if (this.state.section !== null) {
      settings = (
        <>
          <Justifyicons
            alignSelf={this.state.section.Settings.alignSelf}
            changeSetting={this.changeSetting}
          />
          <Marginsettings />
          <Paddingsettings />
        </>
      );
    }
    return (
      <div
        id="Header_Settings"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <form onSubmit={this.onSubmit}>
          <label>
            Header:
            <input
              style={{
                marginLeft: "10px",
                borderRadius: "5px",
                border: "2px solid Lightblue",
                color: "black"
              }}
              autoFocus={true}
              onBlur={this.onBlur}
              type="text"
              name={"header"}
              placeholder={this.state.prevHeader}
              value={this.state.header}
              onChange={this.onChange}
              onFocus={this.onFocus}
            />
          </label>
        </form>
        {settings}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { updateHeader })(Headersettings);
