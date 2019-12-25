import React, { Component } from "react";
import { connect } from "react-redux";

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
    let icon;
    let { name, sectionLocation, pageLocation, containerLocation } = this.props;
    let lowerName = name;
    let upperName = lowerName.charAt(0).toUpperCase() + lowerName.substring(1);
    let offset = this.props.depth * 20 + 5;
    if (this.props.isParent === true) {
      if (this.props.isOpen === false) {
        icon = (
          <svg
            className="w-4 h-4 mt-1 cursor-pointer rounded-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={() => {
              this.props.toggleOpen();
            }}
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
            onClick={() => {
              this.props.toggleOpen();
            }}
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        );
      }
    } else {
      icon = <div className="h-4 w-4"></div>;
    }
    return (
      <div
        className="flex"
        onDrag={() => {}}
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
          className="w-16 text-xs text-center rounded border-gray-500 border-2"
          style={{ backgroundColor: `${this.state.bgColor}` }}
          draggable
        >
          {upperName}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Sectiontreeitem);
