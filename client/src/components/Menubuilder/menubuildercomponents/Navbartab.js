import React, { Component } from "react";
import { connect } from "react-redux";

import { setPageFocus } from "../../../actions/menubuilderActions";

class Navbartab extends Component {
  constructor(props) {
    super(props);
    this.setFocus = this.setFocus.bind(this);
  }

  setFocus() {
    this.props.setPageFocus(this.props.Myfocus);
  }
  render() {
    let classes = "text-center width-full flex-grow focus:outline-none py-2";
    if (this.props.focus === this.props.Myfocus) {
      classes += " bg-blue-500 cursor-default rounded";
    }
    return (
      <button id="Navbartab" onClick={this.setFocus} className={classes}>
        {this.props.Title}
      </button>
    );
  }
}

export default connect(null, { setPageFocus })(Navbartab);
