import React, { Component } from "react";
import { connect } from "react-redux";

class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      addPageHidden: true,
      pagesettingsHidden: true
    };
    this.toggleClick = this.toggleClick.bind(this);
  }
  toggleClick() {
    this.setState(prevState => {
      return { hidden: !prevState.hidden };
    });
  }
  render() {
    let content;
    if (this.state.hidden === true) {
      content = (
        <div
          className="bg-gray-300 border-gray-500 border-2 cursor-pointer hover:border-gray-600 h-7 w-11/12 mt-1 rounded-full flex justify-around"
          onClick={this.toggleClick}
        >
          <div className="">Menu Items</div>
        </div>
      );
    } else {
      content = (
        <div className="bg-gray-300 mt-1  hover:border-gray-600 border-gray-500 border-2 w-11/12 rounded-lg flex flex-col items-center ">
          <div
            className="cursor-pointer bg-gray-300 rounded-full border-2 border-gray-500 hover:border-gray-600 w-11/12 text-center mt-1"
            onClick={this.toggleClick}
          >
            <div className="">Menu Items</div>
          </div>
          <div className="w-11/12 h-24 overflow-auto bg-gray-100 my-1 rounded-lg border-2 border-gray-400 hover:border-gray-500"></div>
        </div>
      );
    }
    return <div className="w-full flex justify-center">{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  globalState: state.globalstyles
});

export default connect(mapStateToProps, {})(MenuItems);
