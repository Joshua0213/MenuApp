import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebarsettingsnavigationtab from "./Sidebarsettingsnavigationtab";

class Sidebarsettingsnavigation extends Component {
  render() {
    let { settingsFocus } = this.props.Page;
    let content = [
      <div key={0} id="Sidebarsettingsnavigationpagetab" style={{}}>
        <Sidebarsettingsnavigationtab
          index={null}
          address={settingsFocus}
          pageTab={true}
        />
      </div>
    ];
    if (settingsFocus !== null) {
      settingsFocus.forEach((e, i) => {
        content.push(
          <Sidebarsettingsnavigationtab
            key={i + 1}
            index={i}
            address={settingsFocus}
            pageTab={false}
          />
        );
      });
    }
    return (
      <div
        id="Sidebarsettingsnavigation"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "10px 0px 10px 20px"
        }}
      >
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Sidebarsettingsnavigation);
