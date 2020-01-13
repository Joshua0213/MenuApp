import React, { Component } from "react";
import { connect } from "react-redux";

import { updateMenuSection } from "../../../../../../../actions/pageActions";

class Marginsettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      prevMargin: 0,
      newMargin: "",
      prevMarginTop: 0,
      newMargin: "",
      prevMarginBottom: 0,
      newMargin: ""
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.changeNewMargin = this.changeNewMargin.bind(this);
    this.toggleTuneMargin = this.toggleTuneMargin.bind(this);
  }

  componentDidMount() {
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
        prevMargin: section.Settings.margin,
        prevMarginTop: section.extraSettings.marginSettings.marginTop,
        prevMarginBottom: section.extraSettings.marginSettings.marginBottom
      };
    });
  }

  toggleTuneMargin() {
    let { Page, updateMenuSection } = this.props;
    let { settingsFocus, pageArray, pageFocus } = Page;
    let section = pageArray[pageFocus].Sections[settingsFocus[0]];
    if (settingsFocus.length > 1) {
      section = section.Content[settingsFocus[1]];
      if (settingsFocus.length > 2) {
        section = section.Content[settingsFocus[2]];
      }
    }
    updateMenuSection(pageArray, pageFocus, settingsFocus, [
      "extraSettings",
      "tuneMargin",
      !section.extraSettings.tuneMargin
    ]);
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  changeNewMargin(e) {
    this.setState({ newMargin: e.target.value });
  }

  render() {
    let { settingsFocus, pageArray, pageFocus, brightness } = this.props.Page;
    let section = pageArray[pageFocus].Sections[settingsFocus[0]];
    if (settingsFocus.length > 1) {
      section = section.Content[settingsFocus[1]];
      if (settingsFocus.length > 2) {
        section = section.Content[settingsFocus[2]];
      }
    }
    let content;
    let extraSettingsCover = "";
    let openerStyle = {
      display: "flex",
      justifyContent: "space-between",
      cursor: "pointer",
      padding: "5px"
    };
    if (!section.extraSettings.tuneMargin) {
      extraSettingsCover = (
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: `${
              !section.extraSettings.tuneMargin ? "rgba(100,100,100,.6)" : ""
            }`
          }}
        ></div>
      );
    }
    if (!this.state.isOpen) {
      content = (
        <div style={openerStyle} onClick={this.toggleOpen}>
          <div>Margins</div>
          <div>+</div>
        </div>
      );
    } else {
      content = (
        <>
          <div style={openerStyle} onClick={this.toggleOpen}>
            <div>Margins</div>
            <div>-</div>
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            {" "}
            <div>
              {"Margin:  "}
              <input
                type="number"
                value={this.state.newMargin}
                style={{
                  width: "50px",
                  border: `1px solid ${
                    brightness === "light" ? "Black" : "Grey"
                  }`
                }}
                placeholder={parseInt(section.Settings.margin)}
                onChange={this.changeNewMargin}
              />
              <span style={{ fontSize: "12px" }}>(px)</span>
            </div>{" "}
            <div>
              <input
                type="checkbox"
                checked={section.extraSettings.tuneMargin}
                onChange={this.toggleTuneMargin}
              ></input>
              Fine Tune
            </div>{" "}
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              {extraSettingsCover}
              <div>
                {"Top:  "}
                <input
                  type="number"
                  value={this.state.newMarginTop}
                  style={{
                    width: "50px",
                    border: `1px solid ${
                      brightness === "light" ? "Black" : "Grey"
                    }`
                  }}
                  placeholder={parseInt(
                    section.extraSettings.marginSettings.marginTop
                  )}
                  onChange={this.changeNewMargin}
                ></input>
                <span style={{ fontSize: "12px" }}>(px)</span>
                <div>
                  {"Bottom:  "}
                  <input
                    type="number"
                    value={this.state.newMarginBottom}
                    style={{
                      width: "50px",
                      border: `1px solid ${
                        brightness === "light" ? "Black" : "Grey"
                      }`
                    }}
                    placeholder={parseInt(
                      section.extraSettings.marginSettings.marginBottom
                    )}
                    onChange={this.changeNewMargin}
                  ></input>
                  <span style={{ fontSize: "12px" }}>(px)</span>
                </div>
              </div>
            </div>
          </form>
        </>
      );
    }

    return (
      <div
        style={{
          borderTop: `2px solid ${
            this.props.Page.brightness === "light" ? "Black" : "White"
          }`,
          borderBottom: `2px solid ${
            this.props.Page.brightness === "light" ? "Black" : "White"
          }`,
          width: "95%",
          marginTop: "8px",
          borderRadius: "5px"
        }}
      >
        {content}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { updateMenuSection })(Marginsettings);
