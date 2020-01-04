import React, { Component } from "react";
import { connect } from "react-redux";

import { setPageFocus } from "../../../../actions/pageActions";

class Pagenavbartab extends Component {
  constructor(props) {
    super(props);
    this.changeFocus = this.changeFocus.bind(this);
  }

  changeFocus() {
    this.props.setPageFocus(this.props.index);
  }

  render() {
    return (
      <div
        id="Page_NavbarTab"
        onClick={this.changeFocus}
        style={{ cursor: "pointer" }}
      >
        {this.props.name}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { setPageFocus })(Pagenavbartab);
