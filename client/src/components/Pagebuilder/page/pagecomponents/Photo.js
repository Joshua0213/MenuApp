import React, { Component } from "react";
import { connect } from "react-redux";

import { getImage } from "../../../../actions/pageActions";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }
  componentDidMount() {
    let content = "";
    let { imageArray } = this.props.Page;
    content = imageArray[this.props.index].path;
    this.props.getImage(content).then(res => this.setState({ image: res }));
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: "red",
          width: "100px",
          height: "100px",
          border: "1px solid black",
          margin: "5px"
        }}
      >
        <img src={this.state.image} alt="" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { getImage })(Photo);
