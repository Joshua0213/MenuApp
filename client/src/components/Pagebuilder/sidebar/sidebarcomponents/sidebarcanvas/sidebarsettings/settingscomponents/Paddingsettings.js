import React, { Component } from "react";
import { connect } from "react-redux";

class Paddingsettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let content;
    let openerStyle = {
      display: "flex",
      justifyContent: "space-between",
      cursor: "pointer",
      padding: "5px"
    };
    if (!this.state.isOpen) {
      content = (
        <div style={openerStyle}>
          <div>Padding</div>
          <div>+</div>
        </div>
      );
    } else {
      content = (
        <>
          <div style={openerStyle}>
            <div>Padding</div>
            <div>-</div>
          </div>
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
        onClick={this.toggleOpen}
      >
        {content}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Paddingsettings);
