import React, { Component } from "react";
import { connect } from "react-redux";

import Sectiontreefactory from "./Sectiontreefactory";
import Sectiontreedragnode from "./Sectiontreedragnode";
import Sectiontreecontainer from "./Sectiontreecontainer";

class Sectiontree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragItem: null
    };
    this.changeDragItem = this.changeDragItem.bind(this);
  }

  changeDragItem(id) {
    this.setState(() => {
      return {
        dragItem: id
      };
    });
  }

  //ToDo list
  //dragnodes need to exist in between each item
  //dragnodes need to know thier parent container
  //containers

  render() {
    let sections = [];
    let { menuArr, pageFocus } = this.props.menuArr;
    menuArr[pageFocus].Content.forEach((element, index) => {
      sections.push(
        <Sectiontreefactory
          key={index + "item" + 0}
          depth={0}
          dragItem={this.state.dragItem}
          changeDragItem={this.changeDragItem}
          containerLocation={null}
          sectionLocation={index}
          pageLocation={pageFocus}
        />
      );
      sections.push(
        <Sectiontreedragnode key={index + 1 + "nodedepth" + 0} depth={0} />
      );
    });

    return (
      <div className="w-11/12 m-h-20 mt-1 rounded-lg m-px border-2 border-gray-500 bg-gray-100">
        The Tree
        <Sectiontreedragnode depth={0} />
        {sections}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Sectiontree);
