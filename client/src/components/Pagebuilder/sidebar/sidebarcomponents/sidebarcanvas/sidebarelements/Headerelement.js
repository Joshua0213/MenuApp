import React, { Component } from "react";
import { connect } from "react-redux";

import { setPageDragging } from "../../../../../../actions/pageActions";

class Headerelement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    };
    this.startDrag = this.startDrag.bind(this);
    this.endDrag = this.endDrag.bind(this);

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
  }

  mouseEnter() {
    let { brightness } = this.props.Page;
    this.setState({
      bgColor: brightness === "light" ? "#90cdf4" : "#2c5282"
    });
  }
  mouseExit() {
    this.setState({ bgColor: "" });
  }

  startDrag() {
    let { brightness } = this.props.Page;
    this.props.setPageDragging(["create", "Header"]);
    this.setState({
      bgColor: brightness === "light" ? "#90cdf4" : "#2c5282"
    });
  }

  endDrag() {
    this.props.setPageDragging(null);
    this.setState({ bgColor: "" });
  }

  render() {
    let { brightness } = this.props.Page;
    return (
      <div
        style={{
          border: `2px solid ${brightness === "light" ? "#90cdf4" : "#1a202c"}`,
          borderRadius: "3px",
          padding: "3px",
          margin: "3px",
          backgroundColor: this.state.bgColor,
          cursor: "pointer"
        }}
        draggable
        onDragStart={this.startDrag}
        onDragEnd={this.endDrag}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseExit}
      >
        Header
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { setPageDragging })(Headerelement);
