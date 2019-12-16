import React, { Component } from "react";
import { connect } from "react-redux";

import {
  setPageFocus,
  setSectionFocus
} from "../../../../actions/menubuilderActions";

class Navbartab extends Component {
  constructor(props) {
    super(props);
    this.setFocus = this.setFocus.bind(this);
  }

  setFocus() {
    //check if the next page has a section array
    //that is long enough to handle the current section focus
    if (
      this.props.menuArr.sectionFocus >
      this.props.menuArr.menuArr[this.props.Myfocus].Content.length - 1
    ) {
      this.props.setSectionFocus(
        this.props.menuArr.menuArr[this.props.Myfocus].Content.length - 1
      );
    }

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

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { setPageFocus, setSectionFocus })(
  Navbartab
);
