import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../Common/Spinner";
//import TextFieldGroupReactive from "../../Common/TextFieldGroupReactive";
import { getMenu } from "../../../actions/menubuilderActions";

//import Addsection from "./sections/Addsection";
import Navbarcanvas from "./Navbarcanvas";
import Menupagecanvas from "./Menupagecanvas";
import Menupage from "./Menupage";

class Menubuildercanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageFocus: 0
    };
    this.changeFocus = this.changeFocus.bind(this);
  }
  changeFocus(index) {
    this.setState({
      pageFocus: index
    });
  }
  componentDidMount() {
    this.props.getMenu();
  }

  render() {
    const { menuObj } = this.props.menuBuilt;
    const { loading } = this.props.menuBuilt;
    let navbar;
    let content;
    let pageContent;
    console.log(this.props);

    if (loading) {
      content = <Spinner />;
    } else {
      if (menuObj.length < 2) {
        navbar = null;
        pageContent = <Menupage />;
      } else {
        //
        //logic for having a navbar goes here
        let navArr = [];
        let pageArr = [];
        menuObj.forEach(element => {
          navArr.push(element.Title);
          pageArr.push(element.Content);
        });
        navbar = (
          <Navbarcanvas
            navArr={navArr}
            focus={this.state.pageFocus}
            changeFocus={this.changeFocus}
          />
        );
        pageContent = (
          <Menupagecanvas focus={this.state.pageFocus} pageArr={pageArr} />
        );
      }
    }
    content = (
      <div>
        {navbar} {pageContent}
      </div>
    );

    let finalized = <div>{content}</div>;
    return (
      <div id="Menubuildercanvas" className="w-full text-center">
        {finalized}
      </div>
    );
  }
}

Menubuildercanvas.propTypes = {
  getMenu: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menuBuilt: state.menubuilt
});

export default connect(mapStateToProps, { getMenu })(Menubuildercanvas);
