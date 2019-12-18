import React, { Component } from "react";
import { connect } from "react-redux";

import { setDisplaySize } from "../../../../../actions/menubuilderActions";

class Displayicons extends Component {
  constructor(props) {
    super(props);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleMedium = this.toggleMedium.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
  }

  toggleLarge() {
    this.props.setDisplaySize("large");
  }

  toggleMedium() {
    this.props.setDisplaySize("medium");
  }

  toggleSmall() {
    this.props.setDisplaySize("small");
  }

  render() {
    let { displaySize } = this.props.menuArr;
    let largeClasses = "w-6 h-6 fill-current";
    let mediumClasses = "w-6 h-6 mx-2 fill-current";
    let smallClasses = "w-6 h-6 fill-current";
    let largeClick = this.toggleLarge;
    let mediumClick = this.toggleMedium;
    let smallClick = this.toggleSmall;

    switch (displaySize) {
      case "large":
        largeClasses += " text-black";
        mediumClasses += " text-gray-600 hover:text-black cursor-pointer";
        smallClasses += " text-gray-600 hover:text-black cursor-pointer";
        largeClick = null;
        break;
      case "medium":
        mediumClasses += " text-black";
        largeClasses += " text-gray-600 hover:text-black cursor-pointer";
        smallClasses += " text-gray-600 hover:text-black cursor-pointer";
        let mediumClick = null;
        break;
      case "small":
        smallClasses += " text-black";
        largeClasses += " text-gray-600 hover:text-black cursor-pointer";
        mediumClasses += " text-gray-600 hover:text-black cursor-pointer";
        let smallClick = null;
        break;
      default:
        largeClasses += " ";
        largeClick = null;
    }
    return (
      <div className="flex flex-rows">
        <svg
          className={smallClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={smallClick}
        >
          <path
            d="M14.004,0H5.996C4.894,0,4,0.894,4,1.996v16.007C4,19.106,4.894,20,5.996,20h8.007C15.106,20,16,19.106,16,18.004V1.996
	C16,0.894,15.106,0,14.004,0z M10,19c-0.69,0-1.25-0.447-1.25-1s0.56-1,1.25-1s1.25,0.447,1.25,1S10.69,19,10,19z M14,16H6V2h8V16z"
          />
        </svg>
        <svg
          className={mediumClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={mediumClick}
        >
          <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 0v14h12V2H4zm6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
        <svg
          className={largeClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={largeClick}
        >
          <path
            d="M18,1H2C0.899,1,0,1.9,0,3v11c0,1.1,0.882,2.178,1.961,2.393l4.372,0.875C6.333,17.268,2.57,19,5,19h10
	c2.43,0-1.334-1.732-1.334-1.732l4.373-0.875C19.117,16.178,20,15.1,20,14V3C20,1.9,19.1,1,18,1z M18,14H2V3h16V14z"
          />
        </svg>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {
  setDisplaySize
})(Displayicons);
