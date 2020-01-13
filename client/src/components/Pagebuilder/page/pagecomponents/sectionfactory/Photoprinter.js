import React, { Component } from "react";
import { connect } from "react-redux";
import Photo from "../Photo";

class Photoprinter extends Component {
  render() {
    let photoArray = [];
    this.props.Page.imageArray.forEach((e, i) => {
      photoArray.push(<Photo key={i} index={i} />);
    });
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {photoArray}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Photoprinter);
