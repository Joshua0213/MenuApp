import React, { Component } from "react";

import Menupage from "./Menupage";

class Menupagecanvas extends Component {
  render() {
    let { pageArr } = this.props;
    const pages = pageArr.map((page, index) => {
      return (
        <Menupage
          key={page}
          Content={page}
          MyFocus={index}
          focus={this.props.focus}
        />
      );
    });
    return <div id="Menupagecanvas">{pages}</div>;
  }
}

export default Menupagecanvas;
