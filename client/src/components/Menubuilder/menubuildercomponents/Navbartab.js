import React, { Component } from "react";

class Navbartab extends Component {
  render() {
    let classes = "text-center width-full flex-grow focus:outline-none py-2";
    if (this.props.focus === this.props.Myfocus) {
      classes += " bg-blue-500 cursor-default";
    }
    let clickEvent = this.props.changeFocus;
    return (
      <button
        id="Navbartab"
        onClick={() => clickEvent(this.props.Myfocus)}
        className={classes}
      >
        {this.props.Title}
      </button>
    );
  }
}

export default Navbartab;
