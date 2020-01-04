import React, { Component } from "react";
import { connect } from "react-redux";

import { updateSave } from "../../../../../actions/pageActions";

class Savebutton extends Component {
  render() {
    let { needToSave } = this.props.Page;
    return (
      <div
        id="Sidebar_Icons_Savebutton"
        style={{
          backgroundColor: needToSave ? "LightGreen" : "LightGray",
          cursor: needToSave ? "pointer" : "default",
          padding: "1px 4px",
          color: "black",
          border: `3px solid ${needToSave ? "SeaGreen" : "Gray"}`,
          borderRadius: "5px"
        }}
        onClick={() => this.props.updateSave(false)}
      >
        Save
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { updateSave })(Savebutton);
