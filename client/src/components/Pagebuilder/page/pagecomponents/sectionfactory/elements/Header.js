import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    let { Page, address } = this.props;
    let { pageArray, pageFocus } = Page;
    let section = pageArray[pageFocus].Sections[address[0]];
    if (address.length > 1) {
      let tempAddress = [];
      address.forEach(e => {
        tempAddress.push(e);
      });
      tempAddress.splice(0, 1);
      tempAddress.forEach(e => {
        section = section.Content[e];
      });
    }
    return (
      <h1
        style={{
          ...section.Settings,
          backgroundColor: "Green"
        }}
      >
        {section.Value}
      </h1>
    );
  }
}
const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Header);
