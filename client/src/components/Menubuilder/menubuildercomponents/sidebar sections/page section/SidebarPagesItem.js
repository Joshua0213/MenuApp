import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setPageFocus,
  setSectionFocus
} from "../../../../../actions/menubuilderActions";

class SidebarPagesItem extends Component {
  constructor(props) {
    super(props);
    this.setFocus = this.setFocus.bind(this);
  }
  setFocus() {
    //check if the next page has a section array
    //that is long enough to handle the current section focus
    if (
      this.props.menuArr.sectionFocus >
      this.props.menuArr.menuArr[this.props.myFocus].Content.length - 1
    ) {
      this.props.setSectionFocus(
        this.props.menuArr.menuArr[this.props.myFocus].Content.length - 1
      );
    }
    this.props.setPageFocus(this.props.myFocus);
  }
  render() {
    let classes =
      " hover:bg-gray-300 hover:border-gray-500 cursor-pointer border-4 flex-grow flex mx-1 my-1 rounded justify-center";
    let { focus } = this.props;
    let { myFocus } = this.props;
    if (focus === myFocus) {
      classes += " bg-gray-300 border-gray-500";
    } else {
      classes += " bg-gray-200";
    }
    return (
      <div className={classes} onClick={this.setFocus}>
        {this.props.Title}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { setPageFocus, setSectionFocus })(
  SidebarPagesItem
);
