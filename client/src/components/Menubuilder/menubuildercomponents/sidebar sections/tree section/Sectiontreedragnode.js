import React, { Component } from "react";
import { connect } from "react-redux";

import { moveTreeSection } from "../../../../../actions/menubuilderActions";

class Sectiontreedragnode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#058308",
      height: "10px",
      opacity: 0
    };
    this.dragEnter = this.dragEnter.bind(this);
    this.dragExit = this.dragExit.bind(this);
    this.dragDrop = this.dragDrop.bind(this);
    this.moveTreeSection = this.moveTreeSection.bind(this);
  }

  moveTreeSection() {
    this.props.moveTreeSection(
      this.props.menuArr.menuArr,
      this.props.pageLocation,
      this.props.sectionLocation,
      this.props.containerLocation,
      this.props.dragPage,
      this.props.dragSection,
      this.props.dragContainer
    );
  }

  dragEnter() {
    if (this.props.containerLocation === null) {
      this.setState(() => {
        return {
          //bgColor: "#a0aec0",
          height: "10px",
          opacity: 0.8
        };
      });
    } else {
      if (this.props.dragIsParent === true) {
        if (this.props.dragContainer === null) {
          if (
            this.props.pageLocation === this.props.dragPage &&
            this.props.sectionLocation === this.props.dragSection
          ) {
            //dragcontainer doesn't exist, page and section location are same
            return;
          } else {
            //dragcontainer doesn't exist, page or section location are different
            this.setState(() => {
              return {
                //bgColor: "#a0aec0",
                height: "10px",
                opacity: 0.8
              };
            });
          }
        } else {
          //dragcontainer exists
          if (
            this.props.pageLocation !== this.props.dragPage ||
            this.props.sectionLocation !== this.props.dragSection
          ) {
            //dragcontainer exists page or section location is different
            this.setState(() => {
              return {
                //bgColor: "#a0aec0",
                height: "10px",
                opacity: 0.8
              };
            });
          } else {
            //dragcontainer exists, page and section locations are the same
            //check to see if deviation siblings or if depth is lower
            if (
              this.props.dragContainer.length >=
              this.props.containerLocation.length
            ) {
              this.setState(() => {
                return {
                  //bgColor: "#a0aec0",
                  height: "10px",
                  opacity: 0.8
                };
              });
            } else {
              //dragcontainer started from a lower address
              //check against node address for deviation in known values
              let addressIsSame = true;
              this.props.dragContainer.forEach((element, index) => {
                if (element !== this.props.containerLocation[index]) {
                  addressIsSame = false;
                }
              });
              if (!addressIsSame) {
                this.setState(() => {
                  return {
                    //bgColor: "#a0aec0",
                    height: "10px",
                    opacity: 0.8
                  };
                });
              }
            }
          }
        }
      } else {
        this.setState(() => {
          return {
            //bgColor: "#a0aec0",
            height: "10px",
            opacity: 0.8
          };
        });
      }
    }
  }

  dragDrop() {
    if (this.props.containerLocation === null) {
      this.setState(() => {
        return {
          opacity: 0
        };
      });
      this.moveTreeSection();
    } else {
      if (this.props.dragIsParent === true) {
        if (this.props.dragContainer === null) {
          if (
            this.props.pageLocation === this.props.dragPage &&
            this.props.sectionLocation === this.props.dragSection
          ) {
            //dragcontainer doesn't exist, page and section location are same
            return;
          } else {
            //dragcontainer doesn't exist, page or section location are different
            this.setState(() => {
              return {
                opacity: 0
              };
            });
            this.moveTreeSection();
          }
        } else {
          //dragcontainer exists
          if (
            this.props.pageLocation !== this.props.dragPage ||
            this.props.sectionLocation !== this.props.dragSection
          ) {
            //dragcontainer exists page or section location is different
            this.setState(() => {
              return {
                opacity: 0
              };
            });
            this.moveTreeSection();
          } else {
            //dragcontainer exists, page and section locations are the same
            //check to see if deviation siblings or if depth is lower
            if (
              this.props.dragContainer.length >=
              this.props.containerLocation.length
            ) {
              this.setState(() => {
                return {
                  opacity: 0
                };
              });
              this.moveTreeSection();
            } else {
              //dragcontainer started from a lower address
              //check against node address for deviation in known values
              let addressIsSame = true;
              this.props.dragContainer.forEach((element, index) => {
                if (element !== this.props.containerLocation[index]) {
                  addressIsSame = false;
                }
              });
              if (!addressIsSame) {
                this.setState(() => {
                  return {
                    opacity: 0
                  };
                });
                this.moveTreeSection();
              }
            }
          }
        }
      } else {
        this.setState(() => {
          return {
            opacity: 0
          };
        });
        this.moveTreeSection();
      }
    }
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
    let offset = this.props.depth * 20 + 19;
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
          this.dragDrop();
        }}
      ></div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { moveTreeSection })(
  Sectiontreedragnode
);
