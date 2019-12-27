import React, { Component } from "react";
import { connect } from "react-redux";

import {
  setTreeHoverFocus,
  setTreeMainFocus,
  toggleSettingsOpen
} from "../../../../../actions/treefocusActions";

class Sectiontreeitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#e2e8f0"
    };
    this.dragEnter = this.dragEnter.bind(this);
    this.dragExit = this.dragExit.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.checkIfMainFocus = this.checkIfMainFocus.bind(this);
    this.checkIfHoverFocus = this.checkIfHoverFocus.bind(this);
  }

  checkIfMainFocus() {
    let {
      treeFocusPage,
      treeFocusSection,
      treeFocusContainer
    } = this.props.treeFocus;
    let { sectionLocation, pageLocation, containerLocation } = this.props;
    if (
      treeFocusPage !== pageLocation ||
      treeFocusSection !== sectionLocation
    ) {
      return false;
    } else {
      //page location and section location match
      if (treeFocusContainer === null && containerLocation === null) {
        return true;
      } else {
        //One or both have container locations
        if (treeFocusContainer === null || containerLocation === null) {
          // only one has a container location return false
          return false;
        } else {
          //both have container locations
          if (treeFocusContainer.length !== containerLocation.length) {
            return false;
          } else {
            //addresses are the same length
            let same = true;
            treeFocusContainer.forEach((element, index) => {
              if (element !== containerLocation[index]) {
                same = false;
              }
            });
            if (same) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
    }
  }

  checkIfHoverFocus() {
    let {
      treeHoverPage,
      treeHoverSection,
      treeHoverContainer
    } = this.props.treeFocus;
    let { sectionLocation, pageLocation, containerLocation } = this.props;
    if (
      treeHoverPage !== pageLocation ||
      treeHoverSection !== sectionLocation
    ) {
      return false;
    } else {
      //page location and section location match
      if (treeHoverContainer === null && containerLocation === null) {
        return true;
      } else {
        //One or both have container locations
        if (treeHoverContainer === null || containerLocation === null) {
          // only one has a container location return false
          return false;
        } else {
          //both have container locations
          if (treeHoverContainer.length !== containerLocation.length) {
            return false;
          } else {
            //addresses are the same length
            let same = true;
            treeHoverContainer.forEach((element, index) => {
              if (element !== containerLocation[index]) {
                same = false;
              }
            });
            if (same) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
    }
  }

  onClick() {
    let isMainFocus = this.checkIfMainFocus();
    if (isMainFocus) {
      this.props.setTreeMainFocus(null, null, null);
      this.props.setTreeHoverFocus(
        this.props.pageLocation,
        this.props.sectionLocation,
        this.props.containerLocation
      );
    } else {
      this.props.setTreeMainFocus(
        this.props.pageLocation,
        this.props.sectionLocation,
        this.props.containerLocation
      );
      this.props.setTreeHoverFocus(null, null, null);
    }
  }

  mouseEnter() {
    let isMainFocus = this.checkIfMainFocus();
    if (!isMainFocus) {
      this.props.setTreeHoverFocus(
        this.props.pageLocation,
        this.props.sectionLocation,
        this.props.containerLocation
      );
    }
  }
  mouseExit() {
    let isMainFocus = this.checkIfMainFocus();
    if (!isMainFocus) {
      this.props.setTreeHoverFocus(null, null, null);
    }
  }

  dragEnter() {
    if (this.props.dragItem !== this.props.id && this.props.isParent === true) {
      this.setState(() => {
        return {
          bgColor: "#a0aec0"
        };
      });
    }
  }

  dragExit() {
    if (this.props.dragItem !== this.props.id) {
      this.setState(() => {
        return {
          bgColor: "#e2e8f0"
        };
      });
    }
  }

  dragEnd() {
    this.props.cancelDrag();
    this.setState(() => {
      return {
        bgColor: "#e2e8f0"
      };
    });
  }

  dragStart() {
    this.setState(() => {
      return {
        bgColor: "#f7fafc"
      };
    });
  }

  render() {
    let isMainFocus = this.checkIfMainFocus();
    let isHoverFocus = this.checkIfHoverFocus();
    let borderColor = "#a0aec0";
    if (isHoverFocus) {
      borderColor = "#3182ce";
    }
    let settingsDiv = <div></div>;
    let offset = this.props.depth * 20 + 5;
    if (isMainFocus) {
      borderColor = "#38a169";
      settingsDiv = (
        <div
          className=""
          style={{
            marginLeft: `${offset + 37}px`
            // marginTop: "1px"
          }}
        >
          <svg
            className="w-5 h-5 mt-px mb-1 cursor-pointer text-orange-400 fill-current hover:text-yellow-500 hover:bg-gray-100 rounded-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={this.props.toggleSettingsOpen}
          >
            <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
          </svg>
        </div>
      );
    }
    let icon;
    let { name, sectionLocation, pageLocation, containerLocation } = this.props;
    let lowerName = name;
    let upperName = lowerName.charAt(0).toUpperCase() + lowerName.substring(1);
    if (this.props.isParent === true) {
      if (this.props.isOpen === false) {
        icon = (
          <svg
            className="w-4 h-4 mt-1 cursor-pointer rounded-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={this.props.toggleOpen}
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        );
      } else if (this.props.isOpen === true) {
        icon = (
          <svg
            className="w-4 h-4 mt-1 cursor-pointer rounded-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={this.props.toggleOpen}
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        );
      }
    } else {
      icon = <div className="h-4 w-4"></div>;
    }
    return (
      <div className="flex flex-col">
        <div
          className="flex"
          onMouseEnter={() => {
            this.mouseEnter();
          }}
          onMouseLeave={this.mouseExit}
          onDragStart={() => {
            this.props.changeDragItem(
              pageLocation,
              sectionLocation,
              containerLocation,
              this.props.isParent
            );
            this.dragStart();
          }}
          onDragEnd={() => {
            this.dragEnd();
          }}
          onDrop={() => {
            this.dragExit();
          }}
          style={{ marginLeft: `${offset}px` }}
        >
          {icon}
          <div
            onClick={this.onClick}
            className="w-16 text-xs text-center rounded cursor-pointer border-2"
            style={{
              backgroundColor: `${this.state.bgColor}`,
              borderColor: `${borderColor}`
            }}
            draggable
          >
            {upperName}
          </div>
        </div>
        {settingsDiv}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  treeFocus: state.treefocus
});

export default connect(mapStateToProps, {
  setTreeHoverFocus,
  setTreeMainFocus,
  toggleSettingsOpen
})(Sectiontreeitem);
