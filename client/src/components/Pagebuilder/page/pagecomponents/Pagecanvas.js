import React, { Component } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line
import Addsection from "./Addsection";
import Firstaddsection from "./Firstaddsection";
import Sectionfactory from "./sectionfactory/Sectionfactory";

class Pagecanvas extends Component {
  render() {
    let { displaySize, pageArray, pageFocus } = this.props.Page;
    let { Settings, Sections } = pageArray[pageFocus];
    let { backgroundColor } = Settings;
    let content = [];
    if (Sections.length > 0) {
      Sections.forEach((e, i) => {
        content.push(<Sectionfactory key={i + "s"} address={[i]} />);
        content.push(<Addsection key={i + "a"} address={[i + 1]} />);
      });
    }
    return (
      <div
        id="Page_Canvas"
        style={{
          height: "120vh",
          width:
            displaySize === "large"
              ? "100%"
              : displaySize === "small"
              ? "411px"
              : "768px",
          backgroundColor: backgroundColor
        }}
      >
        <Firstaddsection address={[0]} />
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Pagecanvas);
