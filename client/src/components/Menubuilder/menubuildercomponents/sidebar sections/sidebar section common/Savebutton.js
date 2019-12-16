import React, { Component } from "react";
import { connect } from "react-redux";

import { setSavePage } from "../../../../../actions/menubuilderActions";

class Savebutton extends Component {
  render() {
    let { needToSave } = this.props.menuArr;
    let content;
    if (needToSave) {
      content = (
        <div
          onClick={this.props.setSavePage}
          className="cursor-pointer  h-8 w-12 text-center border-2 border-green-500 hover:border-green-600 bg-green-400 hover:bg-green-400 rounded-lg"
        >
          Save
        </div>
      );
    } else {
      content = (
        <div className="cursor-not-allowed border-2 border-gray-500 h-8 w-12 text-center bg-gray-400 rounded-lg">
          Save
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { setSavePage })(Savebutton);
