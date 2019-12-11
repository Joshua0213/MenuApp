import React, { Component } from "react";

class Menupage extends Component {
  render() {
    let classes = "text-6xl mt-20";
    let focus = this.props.focus;
    let MyFocus = this.props.MyFocus;

    if (focus !== MyFocus) {
      classes += " hidden";
    }
    return (
      <div id="Menupage" className={classes}>
        {this.props.Content}
      </div>
    );
  }
}

export default Menupage;
