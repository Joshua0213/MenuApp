import axios from "axios";

import {
  GET_MENU_ARRAY,
  SET_PAGE_ARRAY,
  SET_PAGE_RENDER,
  SET_PAGE_BRIGHTNESS,
  SET_PAGE_SIZE,
  SET_SIDEBAR_DISPLAY,
  SET_PAGE_FOCUS,
  SET_PAGE_DRAGGING,
  SET_PAGE_SAVE,
  SET_SETTINGS_FOCUS,
  SET_IMAGE_ARRAY
} from "./types";

export const setPageDragging = isDragging => {
  return {
    type: SET_PAGE_DRAGGING,
    payload: isDragging
  };
};

export const setSettingsFocus = focus => {
  return {
    type: SET_SETTINGS_FOCUS,
    payload: focus
  };
};

export const setPageFocus = newFocus => {
  return {
    type: SET_PAGE_FOCUS,
    payload: newFocus
  };
};

export const setPageRender = page => {
  return {
    type: SET_PAGE_RENDER,
    payload: page
  };
};

export const setSidebarDisplay = display => {
  return {
    type: SET_SIDEBAR_DISPLAY,
    payload: display
  };
};

export const setDisplaySize = size => {
  return {
    type: SET_PAGE_SIZE,
    payload: size
  };
};

export const setPageBrightness = brightness => {
  return {
    type: SET_PAGE_BRIGHTNESS,
    payload: brightness
  };
};

const setPageArray = tempArr => {
  return {
    type: SET_PAGE_ARRAY,
    payload: tempArr
  };
};

const setMenuArray = tempArr => {
  return {
    type: GET_MENU_ARRAY,
    payload: tempArr
  };
};

const setImageArray = imageArr => {
  let tempArr = [];
  imageArr.forEach(e => {
    tempArr.push(e);
  });
  tempArr.splice(0, 1);
  return {
    type: SET_IMAGE_ARRAY,
    payload: tempArr
  };
};

export const updateSave = value => {
  return {
    type: SET_PAGE_SAVE,
    payload: value
  };
};

const updatePageArray = tempArr => dispatch => {
  dispatch(setPageArray(tempArr));
  dispatch(updateSave(true));
};

export const getImage = address => dispatch => {
  let url = `/${address}`;
  return axios.get(url, { responseType: "arraybuffer" }).then(response => {
    let TYPED_ARRAY = new Uint8Array(response.data);
    const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, "");
    let base64String = btoa(STRING_CHAR);
    return `data:image/jpg;base64,${base64String}`;
  });
};

export const getMenuArray = () => dispatch => {
  axios
    .get("/menubuilder")
    .then(res => {
      dispatch(setPageArray(res.data.menuObject.default.menuArray));
      dispatch(setMenuArray(res.data.menuObject.default.menuArray));
      dispatch(setImageArray(res.data.images));
    })
    .catch(err => console.log(err));
};

const createNewHeader = (menuArray, address, page) => dispatch => {
  let newHeader = {
    Type: "Header",
    Value: "New Header",
    prevValue: "",
    extraSettings: {
      tuneBorder: false,
      tuneBorderRadius: false,
      tuneMargin: false,
      tunePadding: false,
      hasBackgroundColor: false,
      backgroundColor: "Green",
      borderSettings: {
        borderTopWidth: "5px",
        borderBottomWidth: "5px",
        borderRightWidth: "5px",
        borderLeftWidth: "5px"
      },
      borderRadiusSettings: {
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px"
      },
      marginSettings: {
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "10px",
        marginLeft: "10px"
      },
      paddingSettings: {
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingRight: "10px",
        paddingLeft: "10px"
      }
    },
    Settings: {
      fontSize: "25px",
      borderStyle: "solid",
      borderColor: "#696969",
      borderWidth: "0px",
      borderRadius: "0px",
      margin: "0px",
      padding: "10px",
      alignSelf: "start"
    },
    wrapperSettings: {}
  };
  let sectionArray = menuArray[page].Sections;
  if (address.length > 1) {
    let tempAddress = [];
    address.forEach(e => {
      tempAddress.push(e);
    });
    tempAddress.splice(tempAddress.length - 1, 1);
    tempAddress.forEach(e => {
      sectionArray = sectionArray[e].Content;
    });
    sectionArray.splice(address[address.length - 1], 1, newHeader);
  } else {
    sectionArray.splice(address[address.length - 1], 0, newHeader);
  }

  dispatch(updatePageArray(menuArray));
};

const createNewContainer = (menuArray, address, page) => dispatch => {
  let newContainer = {
    Type: "Container",
    Content: [{ Type: "Column" }, { Type: "Column" }, { Type: "Column" }],
    Settings: {
      marginTop: "",
      marginBottom: "",
      flexDirection: "row"
    },
    Width: [33.3, 33.3, 33.3],
    Height: [33.3, 33.3, 33.3],
    displayToggle: "small"
  };
  let sectionArray = menuArray[page].Sections;
  if (address.length > 1) {
    let tempAddress = [];
    address.forEach(e => {
      tempAddress.push(e);
    });
    tempAddress.splice(tempAddress.length - 1, 1);
    tempAddress.forEach(e => {
      sectionArray = sectionArray[e].Content;
    });
    newContainer.Settings = {
      marginTop: "",
      marginBottom: "",
      flexDirection: "column"
    };
    newContainer.Width = [33.3, 33.3, 33.3];
    newContainer.Height = [33.3, 33.3, 33.3];
    sectionArray.splice(address[address.length - 1], 1, newContainer);
  } else {
    sectionArray.splice(address[address.length - 1], 0, newContainer);
  }
  dispatch(updatePageArray(menuArray));
};

export const createMenuSection = (
  menuArray,
  type,
  address,
  page
) => dispatch => {
  let tempMenuArray = [];
  menuArray.forEach(e => {
    tempMenuArray.push(e);
  });
  if (type === "Header") {
    dispatch(createNewHeader(tempMenuArray, address, page));
  } else if (type === "Container") {
    dispatch(createNewContainer(tempMenuArray, address, page));
  }
};

export const updateMenuSection = (
  pageArray,
  pageFocus,
  settingsFocus,
  newSetting
) => dispatch => {
  let tempPageArray = [];
  pageArray.forEach(e => {
    tempPageArray.push(e);
  });
  let section = tempPageArray[pageFocus].Sections[settingsFocus[0]];
  if (settingsFocus.length > 1) {
    for (let i = 1; i <= settingsFocus.length - 1; i++) {
      section = section.Content[settingsFocus[i]];
    }
  }

  if (newSetting.length === 3) {
    section[newSetting[0]][newSetting[1]] = newSetting[2];
  } else if (newSetting.length === 4) {
    section[newSetting[0]][newSetting[1]][newSetting[2]] = newSetting[3];
  }
  dispatch(updatePageArray(tempPageArray));
};

export const updateHeader = (
  menuArray,
  page,
  address,
  newHeader
) => dispatch => {
  let tempMenuArray = [];
  menuArray.forEach(e => {
    tempMenuArray.push(e);
  });
  let section = tempMenuArray[page].Sections[address[0]];
  if (address.length > 1) {
    section = section.Content[address[1]];
    if (address.length > 2) {
      section = section.Content[address[2]];
    }
  }

  section.Value = newHeader;
  dispatch(updatePageArray(menuArray));
};
