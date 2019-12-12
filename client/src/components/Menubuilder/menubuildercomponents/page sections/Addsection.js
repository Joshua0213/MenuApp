import React, { Component } from "react";

class Addsection extends Component {
  constructor(props) {
    super(props);
    this.toggler = this.toggler.bind(this);
  }

  toggler() {
    this.props.toggleCanvas(1, this.props.location);
  }
  render() {
    let toggleClick = this.toggler;
    let classes = "text-center text-sm opacity-50 rounded-full w-11/12 ";
    if (this.props.opener < 99998) {
      toggleClick = null;
      if (this.props.opener === this.props.location) {
        classes += "bg-green-600";
      } else {
        classes += "bg-blue-400";
      }
    } else {
      classes += "hover:opacity-100 bg-blue-400 cursor-pointer";
    }
    return (
      <div className={classes} onClick={toggleClick}>
        -----+-----
      </div>
    );
  }
}

export default Addsection;
