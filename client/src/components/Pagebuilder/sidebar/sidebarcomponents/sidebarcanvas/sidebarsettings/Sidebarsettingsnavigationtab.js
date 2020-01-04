import React, { Component } from "react";
import { connect } from "react-redux";
import { setSettingsFocus } from "../../../../../../actions/pageActions";

class Sidebarsettingsnavigationtab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.newSettingFocus = this.newSettingFocus.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
  }

  mouseEnter() {
    this.setState({ hovered: true });
  }

  mouseExit() {
    this.setState({ hovered: false });
  }

  newSettingFocus() {
    let { address, index, pageTab, setSettingsFocus } = this.props;
    let newFocus = [];
    if (pageTab) {
      newFocus = null;
    } else {
      address.forEach(e => {
        newFocus.push(e);
      });
      newFocus.splice(newFocus.length - 1, 1);
      if (index === 0 && address.length === 3) {
        newFocus.splice(newFocus.length - 1, 1);
      }
    }
    setSettingsFocus(newFocus);
  }

  render() {
    let { address, index, pageTab, Page } = this.props;
    let { pageArray, pageFocus, brightness } = Page;
    let content = "Page";
    let marginLeft = "";
    let cursor = "pointer";
    let newSettingFocus = this.newSettingFocus;
    let bgColor = "";
    if (address === null) {
      cursor = "default";
      bgColor = brightness === "light" ? "#90cdf4" : "#2c5282";
    }
    if (this.state.hovered) {
      bgColor = brightness === "light" ? "#90cdf4" : "#2c5282";
    }
    if (!pageTab) {
      if (index === address.length - 1) {
        cursor = "default";
        newSettingFocus = null;
        bgColor = brightness === "light" ? "#90cdf4" : "#2c5282";
      }
      marginLeft = "5px";
      let section = pageArray[pageFocus].Sections[address[0]];
      if (index > 0) {
        section = section.Content[address[1]];
        if (index === 2) {
          section = section.Content[address[2]];
        }
      }

      content = `-${section.Type}`;
      if (section.Type === "Container") {
        if (section.Settings.flexDirection === "row") {
          content = "-Columns";
        } else {
          content = "-Rows";
        }
      }
    }

    return (
      <div
        id="Sidebarsettingsnavigationtab"
        style={{
          border: `2px solid ${brightness === "light" ? "#90cdf4" : "#1a202c"}`,
          padding: "3px 6px",
          marginLeft: marginLeft,
          cursor: cursor,
          borderRadius: "5px",
          backgroundColor: bgColor
        }}
        onClick={newSettingFocus}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseExit}
      >
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { setSettingsFocus })(
  Sidebarsettingsnavigationtab
);
