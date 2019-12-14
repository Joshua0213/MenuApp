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
      "text-center text-sm opacity-50 rounded-full w-full hover:opacity-100 cursor-pointer";

    if (this.state.mouseOver) {
      content = <div>---+---</div>;
      classes += " bg-green-500";
    } else {
      content = "";
      classes += " bg-green-400 h-2";
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
