import {
  GET_MENU_ARRAY,
  SET_PAGE_ARRAY,
  SET_PAGE_RENDER,
  SET_PAGE_BRIGHTNESS,
  SET_PAGE_SIZE,
  SET_SIDEBAR_DISPLAY,
  SET_PAGE_FOCUS,
  SET_PAGE_DRAGGING,
  SET_PAGE_SAVE
} from "./types";

export const setPageDragging = isDragging => {
  return {
    type: SET_PAGE_DRAGGING,
    payload: isDragging
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

export const getMenuArray = () => dispatch => {
  let tempMenuArray = [
    {
      Title: "Lunch",
      Sections: [],
      Settings: {
        backgroundColor: "Cornsilk"
      }
    },
    {
      Title: "Dinner",
      Sections: [],
      Settings: {
        backgroundColor: "Wheat"
      }
    }
  ];
  dispatch(setPageArray(tempMenuArray));
  return {
    type: GET_MENU_ARRAY,
    payload: tempMenuArray
  };
};

const createNewHeader = (menuArray, address, page) => dispatch => {
  let newHeader = {
    Type: "Header",
    Value: "New Header",
    Settings: {
      fontSize: "25px"
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
    Height: []
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
    newContainer.Width = [];
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
