import React, { Component } from "react";

export default class Sectiontreedragnode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#058308",
      height: "10px",
      opacity: 0
    };
    this.dragEnter = this.dragEnter.bind(this);
    this.dragExit = this.dragExit.bind(this);
  }

  dragEnter() {
    this.setState(() => {
      return {
        //bgColor: "#a0aec0",
        height: "10px",
        opacity: 0.8
      };
    });
  }

  dragExit() {
    this.setState(() => {
      return {
        //bgColor: "#9ae6b4",
        height: "10px",
        opacity: 0
      };
    });
  }

  render() {
    let offset = this.props.depth * 20 + 9;
    return (
      <div
        className="w-auto text-xs text-center rounded"
        style={{
          backgroundColor: this.state.bgColor,
          marginLeft: `${offset}px`,
          marginTop: "-4px",
          marginBottom: "-4px",
          height: this.state.height,
          opacity: this.state.opacity,
          position: "relative",
          zIndex: 2
        }}
        onDragEnter={e => {
          e.preventDefault();
          this.dragEnter();
        }}
        onDragLeave={() => {
          this.dragExit();
        }}
        onDragOver={e => {
          e.preventDefault();
          this.dragEnter();
        }}
        onDrop={() => {
          this.dragExit();
        }}
      ></div>
    );
  }
}
