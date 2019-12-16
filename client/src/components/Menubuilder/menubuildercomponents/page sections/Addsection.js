import React, { Component } from "react";

class Addsection extends Component {
  constructor(props) {
    super(props);
    this.toggler = this.toggler.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
    this.mouseEntered = this.mouseEntered.bind(this);
    this.state = {
      mouseOver: false
    };
  }

  toggler() {
    this.props.openSectionToAdd("start");
    this.props.toggleCanvas(1, this.props.location);
  }

  mouseExit() {
    this.setState({ mouseOver: false });
  }

  mouseEntered() {
    this.setState({ mouseOver: true });
  }

  render() {
    let toggleClick = this.toggler;
    let content;
    let classes =
      "text-center text-sm opacity-0 relative z-50 w-6/12 rounded-full hover:opacity-100 cursor-pointer";

    if (this.state.mouseOver) {
      content = <div></div>;
      classes += " bg-blue-500 h-4 -mt-2 -mb-2";
    } else {
      content = "";
      classes += " bg-blue-400 h-4 -mt-2 -mb-2";
    }

    return (
      <div
        className={classes}
        onMouseEnter={this.mouseEntered}
        onMouseLeave={this.mouseExit}
        onClick={toggleClick}
      >
        {content}
      </div>
    );
  }
}

export default Addsection;
