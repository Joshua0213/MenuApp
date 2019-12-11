import React, { Component } from "react";
import Spinner from "../../Common/Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import TextFieldGroupReactive from "../../Common/TextFieldGroupReactive";

//import Addsection from "./sections/Addsection";
import Navbarcanvas from "./Navbarcanvas";
import Menupagecanvas from "./Menupagecanvas";
import Menupage from "./Menupage";
import { getMenuArr } from "../../../actions/menubuilderActions";

class Menubuildercanvas extends Component {
  componentDidMount() {
    this.props.getMenuArr(this.props.menuObj);
  }

  render() {
    const menuObj = this.props.menuObj;
    const loadingArr = this.props.menuArr.loading;
    let navbar;
    let content;
    let pageContent;

    //
    //logic for having a navbar goes here
    if (loadingArr) {
      pageContent = <Spinner />;
    } else {
      let navArr = [];
      let pageFocus = this.props.menuArr.pageFocus;
      if (menuObj.length < 2) {
        navbar = null;
        pageContent = (
          <Menupage
            Content={this.props.menuArr.menuArr[0].Content}
            focus={0}
            MyFocus={0}
          />
        );
      } else {
        let menuArr = this.props.menuArr.menuArr;
        let pageArr = [];
        menuArr.forEach(element => {
          navArr.push(element.Title);
          pageArr.push(element.Content);
        });
        navbar = <Navbarcanvas navArr={navArr} focus={pageFocus} />;
        pageContent = <Menupagecanvas focus={pageFocus} pageArr={pageArr} />;
      }
      content = (
        <div>
          {navbar} <div className="bg-gray-500 h-px w-full"></div> {pageContent}
        </div>
      );
    }

    let finalized = <div>{content}</div>;
    return (
      <div id="Menubuildercanvas" className="w-full text-center">
        {finalized}
      </div>
    );
  }
}

Menubuildercanvas.propTypes = {
  getMenuArr: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { getMenuArr })(Menubuildercanvas);
