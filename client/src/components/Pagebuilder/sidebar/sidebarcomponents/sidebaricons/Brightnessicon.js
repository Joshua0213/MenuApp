import React, { Component } from "react";
import { connect } from "react-redux";

import { setPageBrightness } from "../../../../../actions/pageActions";

class Brightnessicon extends Component {
  render() {
    let { setPageBrightness, Page } = this.props;
    let { brightness } = Page;
    function toggleBrightness() {
      if (brightness === "light") {
        setPageBrightness("dark");
      } else {
        setPageBrightness("light");
      }
    }
    let icon = (
      <svg
        className="w-5 h-5 fill-current cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        onClick={toggleBrightness}
      >
        <path
          d="M19,9.199c-0.182,0-0.799,0-0.98,0c-0.553,0-1,0.359-1,0.801c0,0.441,0.447,0.799,1,0.799c0.182,0,0.799,0,0.98,0
        c0.552,0,1-0.357,1-0.799C20,9.559,19.551,9.199,19,9.199z M10,4.5c-3.051,0-5.5,2.449-5.5,5.5c0,3.051,2.449,5.5,5.5,5.5
        c3.05,0,5.5-2.449,5.5-5.5C15.5,6.949,13.049,4.5,10,4.5z M10,14c-2.211,0-4-1.791-4-4c0-2.211,1.789-4,4-4c2.209,0,4,1.789,4,4
        C14,12.209,12.209,14,10,14z M3,10c0-0.441-0.449-0.801-1-0.801c-0.185,0-0.816,0-1,0c-0.553,0-1,0.359-1,0.801
        c0,0.441,0.447,0.799,1,0.799c0.184,0,0.815,0,1,0C2.551,10.799,3,10.441,3,10z M10,3c0.441,0,0.799-0.447,0.799-1
        c0-0.184,0-0.816,0-1c0-0.553-0.358-1-0.799-1C9.558,0,9.199,0.447,9.199,1c0,0.184,0,0.816,0,1C9.199,2.553,9.558,3,10,3z M10,17
        c-0.442,0-0.801,0.447-0.801,1c0,0.184,0,0.816,0,1c0,0.553,0.359,1,0.801,1c0.441,0,0.799-0.447,0.799-1c0-0.184,0-0.816,0-1
        C10.799,17.447,10.441,17,10,17z M17.365,3.766c0.391-0.391,0.454-0.961,0.142-1.273s-0.883-0.248-1.272,0.143
        c-0.108,0.107-0.593,0.592-0.7,0.699c-0.391,0.391-0.454,0.961-0.142,1.273s0.883,0.248,1.273-0.143
        C16.773,4.357,17.257,3.873,17.365,3.766z M3.334,15.533c-0.108,0.109-0.593,0.594-0.7,0.701c-0.391,0.391-0.454,0.959-0.142,1.271
        s0.883,0.25,1.272-0.141c0.108-0.107,0.593-0.592,0.7-0.699c0.391-0.391,0.454-0.961,0.142-1.274S3.723,15.144,3.334,15.533z
         M3.765,2.635C3.375,2.244,2.804,2.18,2.492,2.492S2.244,3.375,2.633,3.766c0.108,0.107,0.593,0.592,0.7,0.699
        c0.391,0.391,0.96,0.455,1.272,0.143s0.249-0.883-0.141-1.273C4.357,3.227,3.873,2.742,3.765,2.635z M15.534,16.666
        c0.108,0.107,0.593,0.592,0.7,0.699c0.391,0.391,0.96,0.453,1.272,0.143c0.312-0.312,0.249-0.883-0.142-1.273
        c-0.107-0.107-0.592-0.592-0.699-0.699c-0.391-0.391-0.961-0.455-1.274-0.143S15.143,16.275,15.534,16.666z"
        />
      </svg>
    );
    if (this.props.Page.brightness !== "light") {
      icon = (
        <svg
          className="w-5 h-5 fill-current cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={toggleBrightness}
        >
          <path
            d="M10,6.797c-1.775,0-3.2,1.426-3.2,3.201c0,1.773,1.425,3.199,3.2,3.199c1.774,0,3.199-1.426,3.199-3.199
	C13.199,8.223,11.774,6.797,10,6.797z M10,12.047c-1.133,0-2.051-0.916-2.051-2.049c0-1.133,0.918-2.051,2.051-2.051
	c1.132,0,2.05,0.918,2.05,2.051C12.049,11.131,11.131,12.047,10,12.047z M15,5c-0.312-0.312-0.883-0.248-1.273,0.142
	c-0.39,0.391-0.453,0.959-0.141,1.272s0.882,0.25,1.273-0.141C15.249,5.883,15.312,5.312,15,5z M5.142,13.729
	C4.751,14.119,4.688,14.688,5,15s0.882,0.25,1.273-0.141c0.391-0.391,0.454-0.961,0.142-1.273S5.532,13.338,5.142,13.729z M5,5
	C4.688,5.312,4.751,5.883,5.141,6.273c0.391,0.391,0.961,0.453,1.273,0.141s0.249-0.883-0.142-1.273C5.883,4.752,5.312,4.688,5,5z
	 M13.727,14.857c0.39,0.391,0.96,0.455,1.273,0.143s0.249-0.883-0.142-1.274c-0.391-0.391-0.96-0.453-1.273-0.141
	S13.337,14.467,13.727,14.857z M10,4.998c0.441,0,0.8-0.447,0.8-1C10.799,3.445,10.441,3,10,3C9.558,3,9.199,3.445,9.199,3.998
	C9.199,4.551,9.557,4.998,10,4.998z M10,17c0.441,0,0.8-0.447,0.8-1c0-0.553-0.358-0.998-0.799-0.998
	c-0.442,0-0.801,0.445-0.801,0.998C9.199,16.553,9.557,17,10,17z M5,10c0-0.441-0.45-0.8-1.003-0.8C3.444,9.2,3,9.559,3,10
	c0,0.442,0.444,0.8,0.997,0.8C4.55,10.8,5,10.442,5,10z M17,10c0-0.441-0.448-0.8-1.001-0.8C15.446,9.2,15,9.559,15,10
	c0,0.442,0.446,0.8,0.999,0.8C16.552,10.8,17,10.442,17,10z"
          />
        </svg>
      );
    }
    return <div id="Sidebar_Icons_Brightness">{icon}</div>;
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { setPageBrightness })(Brightnessicon);
