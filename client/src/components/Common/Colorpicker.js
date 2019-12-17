import React from "react";
import reactCSS from "reactcss";
import { ChromePicker } from "react-color";

class Colorpicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: {
        r: "241",
        g: "112",
        b: "19",
        a: "1"
      },
      background: "#fff"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.setState({ background: color.hex });
    this.props.changeColor(color.hex);
  };

  render() {
    let styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `${this.props.controlColor}`
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer"
        },
        popover: {
          position: "absolute",
          zIndex: "100"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <div className="z-50">
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color}></div>
        </div>
        {this.state.displayColorPicker ? (
          <div className="z-50" style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <ChromePicker
              color={this.state.background}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Colorpicker;
