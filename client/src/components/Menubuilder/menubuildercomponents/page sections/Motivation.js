import React, { Component } from "react";

import peopleEating from "../../../../img/peopleEating.jpg";
import peopleEating1 from "../../../../img/peopleEating1.jpg";
import peopleEating2 from "../../../../img/peopleEating2.jpg";
import peopleEating3 from "../../../../img/peopleEating3.jpg";
import peopleEating4 from "../../../../img/peopleEating4.jpg";
import peopleEating5 from "../../../../img/peopleEating5.jpg";
import peopleEating6 from "../../../../img/peopleEating6.jpg";
import peopleEating7 from "../../../../img/peopleEating7.jpg";
import peopleEating8 from "../../../../img/peopleEating8.jpg";
import peopleEating9 from "../../../../img/peopleEating9.jpg";
import peopleEating10 from "../../../../img/peopleEating10.jpg";
import peopleEating11 from "../../../../img/peopleEating11.jpg";
import peopleEating12 from "../../../../img/peopleEating12.jpg";
import peopleEating13 from "../../../../img/peopleEating13.jpg";
import peopleEating14 from "../../../../img/peopleEating14.jpg";
import peopleEating15 from "../../../../img/peopleEating15.jpg";
import peopleEating16 from "../../../../img/peopleEating16.jpg";
import peopleEating17 from "../../../../img/peopleEating17.jpg";
import peopleEating18 from "../../../../img/peopleEating18.jpg";
import peopleEating19 from "../../../../img/peopleEating19.jpg";
import peopleEating20 from "../../../../img/peopleEating20.jpg";
import peopleEating21 from "../../../../img/peopleEating21.jpg";
import peopleEating22 from "../../../../img/peopleEating22.jpg";
import peopleEating23 from "../../../../img/peopleEating23.jpg";
import peopleEating24 from "../../../../img/peopleEating24.jpg";

export default class Motivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picArray: [
        { picture: peopleEating, xsize: "534", ysize: "800" },
        { picture: peopleEating1, xsize: "800", ysize: "800" },
        { picture: peopleEating2, xsize: "640", ysize: "960" },
        { picture: peopleEating3, xsize: "800", ysize: "800" },
        { picture: peopleEating4, xsize: "600", ysize: "759" },
        { picture: peopleEating5, xsize: "600", ysize: "750" },
        { picture: peopleEating6, xsize: "600", ysize: "750" },
        { picture: peopleEating7, xsize: "960", ysize: "640" },
        { picture: peopleEating8, xsize: "600", ysize: "750" },
        { picture: peopleEating9, xsize: "600", ysize: "450" },
        { picture: peopleEating10, xsize: "947", ysize: "632" },
        { picture: peopleEating11, xsize: "730", ysize: "378" },
        { picture: peopleEating12, xsize: "758", ysize: "1050" },
        { picture: peopleEating13, xsize: "570", ysize: "855" },
        { picture: peopleEating14, xsize: "828", ysize: "817" },
        { picture: peopleEating15, xsize: "640", ysize: "918" },
        { picture: peopleEating16, xsize: "557", ysize: "836" },
        { picture: peopleEating17, xsize: "669", ysize: "1003" },
        { picture: peopleEating18, xsize: "640", ysize: "530" },
        { picture: peopleEating19, xsize: "750", ysize: "928" },
        { picture: peopleEating20, xsize: "800", ysize: "800" },
        { picture: peopleEating21, xsize: "875", ysize: "583" },
        { picture: peopleEating22, xsize: "898", ysize: "600" },
        { picture: peopleEating23, xsize: "960", ysize: "540" },
        { picture: peopleEating24, xsize: "708", ysize: "750" }
      ],
      arrayValue: 0
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        arrayValue: Math.floor(Math.random() * this.state.picArray.length)
      };
    });
  }

  render() {
    let { picArray, arrayValue } = this.state;
    let width = "80%";
    return (
      <>
        <div
          style={{
            height: `${picArray[arrayValue].ysize}px`,
            //width: `${picArray[arrayValue].xsize}px`,
            width: width,
            backgroundImage: `url('${picArray[arrayValue].picture}')`,
            backgroundPosition: "center"
          }}
        ></div>{" "}
        <div>{arrayValue}</div>{" "}
      </>
    );
  }
}
