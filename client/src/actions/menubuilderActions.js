//import axios from "axios";

import {
  GET_MENU_BUILT,
  GET_MENU_ARR,
  SET_MENU_ARRAY,
  GET_PAGE_FOCUS,
  GET_GLOBALS_OBJECT,
  SET_GLOBALS_OBJECT,
  SET_SIDEBAR_WIDTH,
  SET_NEED_SAVE,
  PAGE_SAVED,
  TOGGLE_ICONS,
  SET_SECTION_FOCUS,
  SET_DISPLAY_SIZE,
  TOGGLE_DISPLAY_BRIGHTNESS
} from "./types";

//Get current menu
export const getMenuObj = () => {
  return {
    type: GET_MENU_BUILT,
    payload: {
      menuArr: [
        {
          Title: "Lunches",
          Content: [
            {
              Type: "header",
              Value: "Lunch Menu",
              Settings: {
                fontSize: "80px",
                InheritfontSize: true,
                backgroundColor: "#EDEEF1",
                widthAuto: false,
                width: "30",
                justifySelf: "start",
                hasBackgroundColor: false,
                borderStyle: "solid",
                borderWidth: "5",
                borderColor: "#927F73",
                borderTop: "10",
                borderBottom: "10",
                borderLeft: "0",
                borderRight: "0",
                borderControl: true,
                margin: "2",
                marginTop: "2",
                marginBottom: "2",
                marginLeft: "2",
                marginRight: "2",
                marginControl: false,
                padding: "2",
                paddingTop: "2",
                paddingBottom: "2",
                paddingLeft: "2",
                paddingRight: "2",
                paddingControl: false,
                zIndex: "1",
                borderRadius: "0",
                borderRadiusTopLeft: "0",
                borderRadiusTopRight: "0",
                borderRadiusBottomLeft: "0",
                borderRadiusBottomRight: "0",
                borderRadiusControl: false
              }
            },
            {
              Type: "header",
              Value: "Broken Header",
              Settings: {
                fontSize: "20px",
                InheritfontSize: false,
                backgroundColor: "#FFFBFB",
                width: "70",
                justifySelf: "center",
                hasBackgroundColor: true,
                borderStyle: "solid",
                widthAuto: true,
                borderWidth: "3",
                borderColor: "#927F73",
                borderTop: "0",
                borderBottom: "0",
                borderLeft: "0",
                borderRight: "0",
                borderControl: false,
                margin: "6",
                marginTop: "2",
                marginBottom: "3",
                marginLeft: "4",
                marginRight: "5",
                marginControl: false,
                padding: "2",
                paddingTop: "2",
                paddingBottom: "2",
                paddingLeft: "2",
                paddingRight: "2",
                paddingControl: false,
                zIndex: "2",
                borderRadius: "0",
                borderRadiusTopLeft: "0",
                borderRadiusTopRight: "0",
                borderRadiusBottomLeft: "0",
                borderRadiusBottomRight: "0",
                borderRadiusControl: false
              }
            },
            //

            //
            //
            //
            //
            //
            //
            {
              Type: "container",
              Value: [
                //
                //
                //
                {
                  Type: "column"
                },
                //
                //
                { Type: "column" },
                //
                {
                  Type: "header",
                  Value: "Other Header",
                  Settings: {
                    fontSize: "20px",
                    InheritfontSize: false,
                    backgroundColor: "#FFFBFB",
                    width: "70",
                    justifySelf: "center",
                    hasBackgroundColor: true,
                    borderStyle: "solid",
                    widthAuto: false,
                    borderWidth: "3",
                    borderColor: "#927F73",
                    borderTop: "0",
                    borderBottom: "0",
                    borderLeft: "0",
                    borderRight: "0",
                    borderControl: false,
                    margin: "6",
                    marginTop: "2",
                    marginBottom: "3",
                    marginLeft: "4",
                    marginRight: "5",
                    marginControl: false,
                    padding: "2",
                    paddingTop: "2",
                    paddingBottom: "2",
                    paddingLeft: "2",
                    paddingRight: "2",
                    paddingControl: false,
                    zIndex: "2",
                    borderRadius: "0",
                    borderRadiusTopLeft: "0",
                    borderRadiusTopRight: "0",
                    borderRadiusBottomLeft: "0",
                    borderRadiusBottomRight: "0",
                    borderRadiusControl: false
                  }
                }
                //
                //
                //
                //
              ],
              Settings: {
                fontSize: "20px",
                InheritfontSize: false,
                backgroundColor: "#FFFBFB",
                width: "100",
                justifySelf: "center",
                hasBackgroundColor: false,
                borderStyle: "solid",
                widthAuto: false,
                borderWidth: "0",
                borderColor: "#927F73",
                borderTop: "0",
                borderBottom: "0",
                borderLeft: "0",
                borderRight: "0",
                borderControl: false,
                margin: "6",
                marginTop: "2",
                marginBottom: "3",
                marginLeft: "4",
                marginRight: "5",
                marginControl: false,
                padding: "2",
                paddingTop: "2",
                paddingBottom: "2",
                paddingLeft: "2",
                paddingRight: "2",
                paddingControl: false,
                zIndex: "2",
                borderRadius: "0",
                borderRadiusTopLeft: "0",
                borderRadiusTopRight: "0",
                borderRadiusBottomLeft: "0",
                borderRadiusBottomRight: "0",
                borderRadiusControl: false
              }
            },

            //
            //
            //
            {
              Type: "spacer",
              Value: "800",
              Settings: {
                backgroundColor: "#EDEEF1",
                width: "100",
                justifySelf: "center",
                hasBackgroundColor: false,
                borderStyle: "none",
                borderWidth: "2",
                widthAuto: false,
                borderColor: "#927F73",
                borderTop: "0",
                borderBottom: "0",
                borderLeft: "0",
                borderRight: "0",
                borderControl: false,
                margin: "0",
                marginTop: "0",
                marginBottom: "0",
                marginLeft: "0",
                marginRight: "0",
                marginControl: false,
                padding: "0",
                paddingTop: "0",
                paddingBottom: "0",
                paddingLeft: "0",
                paddingRight: "0",
                paddingControl: false,
                zIndex: "1",
                borderRadius: "0",
                borderRadiusTopLeft: "0",
                borderRadiusTopRight: "0",
                borderRadiusBottomLeft: "0",
                borderRadiusBottomRight: "0",
                borderRadiusControl: false
              }
            },

            {
              Type: "header",
              Value: "Another Header!",
              Settings: {
                fontSize: "30px",
                InheritfontSize: true,
                backgroundColor: "#EDEEF1",
                width: "50",
                justifySelf: "end",
                hasBackgroundColor: false,
                borderStyle: "none",
                borderWidth: "2",
                widthAuto: false,
                borderColor: "#927F73",
                borderTop: "0",
                borderBottom: "0",
                borderLeft: "0",
                borderRight: "0",
                borderControl: false,
                margin: "2",
                marginTop: "2",
                marginBottom: "2",
                marginLeft: "2",
                marginRight: "2",
                marginControl: false,
                padding: "2",
                paddingTop: "2",
                paddingBottom: "2",
                paddingLeft: "2",
                paddingRight: "2",
                paddingControl: false,
                zIndex: "1",
                borderRadius: "0",
                borderRadiusTopLeft: "0",
                borderRadiusTopRight: "0",
                borderRadiusBottomLeft: "0",
                borderRadiusBottomRight: "0",
                borderRadiusControl: false
              }
            }
          ],
          Settings: {
            backgroundColor: null,
            InheritbackgroundColor: true
          }
        },
        {
          Title: "Dinners",
          Content: [
            {
              Type: "header",
              Value: "Dinner Menu",
              Settings: {
                fontSize: "80px",
                InheritfontSize: false,
                backgroundColor: "#EDEEF1",
                width: "50",
                widthAuto: false,
                justifySelf: "center",
                hasBackgroundColor: false,
                borderStyle: "none",
                borderWidth: "2",
                borderColor: "#927F73",
                borderTop: "0",
                borderBottom: "0",
                borderLeft: "0",
                borderRight: "0",
                borderControl: false,
                margin: "2",
                marginTop: "2",
                marginBottom: "2",
                marginLeft: "2",
                marginRight: "2",
                marginControl: false,
                padding: "2",
                paddingTop: "2",
                paddingBottom: "2",
                paddingLeft: "2",
                paddingRight: "2",
                paddingControl: false,
                zIndex: "1",
                borderRadius: "0",
                borderRadiusTopLeft: "0",
                borderRadiusTopRight: "0",
                borderRadiusBottomLeft: "0",
                borderRadiusBottomRight: "0",
                borderRadiusControl: false
              }
            }
          ],
          Settings: {
            backgroundColor: "#F0E8E8",
            InheritbackgroundColor: false
          }
        }
      ],
      globalsObj: {
        headers: { GfontSize: "35px", GbackgroundColor: "#E49696" },
        menu: { backgroundColor: "#EEE8D9" }
      }
    }
  };
};

export const getMenuArr = menuObj => {
  return {
    type: GET_MENU_ARR,
    payload: menuObj
  };
};

export const setDisplaySize = size => {
  return {
    type: SET_DISPLAY_SIZE,
    payload: size
  };
};

export const setDisplayBrightness = size => {
  return {
    type: TOGGLE_DISPLAY_BRIGHTNESS,
    payload: size
  };
};

const setMenuArr = menuObj => {
  return {
    type: SET_MENU_ARRAY,
    payload: menuObj
  };
};

const setNeedSave = () => {
  return {
    type: SET_NEED_SAVE
  };
};
const savePage = () => {
  return {
    type: PAGE_SAVED
  };
};

export const toggleIcons = toggleTo => {
  return {
    type: TOGGLE_ICONS,
    payload: toggleTo
  };
};

export const getGlobalsObject = globalObj => {
  return {
    type: GET_GLOBALS_OBJECT,
    payload: globalObj
  };
};

const setGlobalsObject = globalObj => dispatch => {
  dispatch(setNeedSave());
  return {
    type: SET_GLOBALS_OBJECT,
    payload: globalObj
  };
};

export const setSavePage = () => dispatch => {
  dispatch(savePage());
};

export const setSidebarWidth = newWidth => {
  return {
    type: SET_SIDEBAR_WIDTH,
    payload: newWidth
  };
};

export const setPageFocus = newfocus => {
  return {
    type: GET_PAGE_FOCUS,
    payload: newfocus
  };
};

export const setSectionFocus = newfocus => {
  return {
    type: SET_SECTION_FOCUS,
    payload: newfocus
  };
};

export const deleteMenuPage = (menuObj, index) => dispatch => {
  let tempObj = menuObj.map(i => i);
  tempObj.splice(index, 1);
  dispatch(setMenuArr(tempObj));
};

export const moveMenuPage = (menuObj, index, dir) => dispatch => {
  let tempObj = menuObj.map(i => i);
  if (dir === 1) {
    ///direction is up, move backwards in array
    let newArr = tempObj.splice(index, 1);
    tempObj.splice(index - 1, 0, newArr[0]);
  } else {
    ///direction is down, move forward in array
    let newArr = tempObj.splice(index, 1);
    tempObj.splice(index + 1, 0, newArr[0]);
  }
  dispatch(setMenuArr(tempObj));
};

export const moveSection = (
  menuObj,
  pageFocus,
  sectionFocus,
  dir
) => dispatch => {
  let tempObj = menuObj.map(i => i);
  if (dir === 1) {
    ///direction is up, move backwards in array
    let newArr = tempObj[pageFocus].Content.splice(sectionFocus, 1);
    tempObj[pageFocus].Content.splice(sectionFocus - 1, 0, newArr[0]);
  } else {
    ///direction is down, move forward in array
    let newArr = tempObj[pageFocus].Content.splice(sectionFocus, 1);
    tempObj[pageFocus].Content.splice(sectionFocus + 1, 0, newArr[0]);
  }
  dispatch(setMenuArr(tempObj));
};

export const addMenuPage = (menuObj, newPage) => dispatch => {
  let tempObj = menuObj.map(i => i);
  let newObj = {
    Title: newPage,
    Content: [
      {
        Type: "header",
        Value: newPage + " Menu",
        Settings: {
          fontSize: "40px",
          InheritfontSize: true,
          backgroundColor: "#EDEEF1",
          widthAuto: false,
          width: "100",
          justifySelf: "center",
          hasBackgroundColor: false,
          borderStyle: "none",
          borderWidth: "2",
          borderColor: "#927F73",
          borderTop: "0",
          borderBottom: "0",
          borderLeft: "0",
          borderRight: "0",
          borderControl: false,
          margin: "2",
          marginTop: "2",
          marginBottom: "2",
          marginLeft: "2",
          marginRight: "2",
          marginControl: false,
          padding: "2",
          paddingTop: "2",
          paddingBottom: "2",
          paddingLeft: "2",
          paddingRight: "2",
          paddingControl: false,
          zIndex: "1",
          borderRadius: "0",
          borderRadiusTopLeft: "0",
          borderRadiusTopRight: "0",
          borderRadiusBottomLeft: "0",
          borderRadiusBottomRight: "0",
          borderRadiusControl: false
        }
      }
    ],
    Settings: {
      backgroundColor: null,
      InheritbackgroundColor: true
    }
  };
  tempObj.push(newObj);
  dispatch(setMenuArr(tempObj));
};

export const renameMenuPage = (menuObj, pageTitle, index) => dispatch => {
  let tempObj = menuObj.map(i => i);
  let pageObj = {
    Title: pageTitle,
    Content: tempObj[index].Content,
    Settings: tempObj[index].Settings
  };
  tempObj.splice(index, 1, pageObj);
  dispatch(setMenuArr(tempObj));
};

export const deleteSection = (
  menuObj,
  pageLocation,
  sectionLocation
) => dispatch => {
  let tempObj = menuObj.map(i => i);
  tempObj[pageLocation].Content.splice(sectionLocation, 1);
  dispatch(setMenuArr(tempObj));
};

export const createNewHeader = (
  menuObj,
  newHeader,
  pageLocation,
  sectionLocation
) => dispatch => {
  let tempObj = menuObj.map(i => i);
  tempObj[pageLocation].Content.splice(sectionLocation, 0, {
    Type: "header",
    Value: newHeader,
    Settings: {
      fontSize: "40px",
      InheritfontSize: true,
      backgroundColor: "#EDEEF1",
      widthAuto: false,
      width: "100",
      justifySelf: "center",
      hasBackgroundColor: false,
      borderStyle: "none",
      borderWidth: "2",
      borderColor: "#927F73",
      borderTop: "0",
      borderBottom: "0",
      borderLeft: "0",
      borderRight: "0",
      borderControl: false,
      margin: "2",
      marginTop: "2",
      marginBottom: "2",
      marginLeft: "2",
      marginRight: "2",
      marginControl: false,
      padding: "2",
      paddingTop: "2",
      paddingBottom: "2",
      paddingLeft: "2",
      paddingRight: "2",
      paddingControl: false,
      zIndex: "1",
      borderRadius: "0",
      borderRadiusTopLeft: "0",
      borderRadiusTopRight: "0",
      borderRadiusBottomLeft: "0",
      borderRadiusBottomRight: "0",
      borderRadiusControl: false
    }
  });
  dispatch(setMenuArr(tempObj));
};

export const createNewContainer = (
  menuArr,
  pageLocation,
  sectionLocation
) => dispatch => {
  let tempArr = menuArr.map(i => i);
  tempArr[pageLocation].Content.splice(sectionLocation, 0, {
    Type: "container",
    Value: [{ Type: "column" }, { Type: "column" }, { Type: "column" }],
    Settings: {
      fontSize: "40px",
      InheritfontSize: true,
      backgroundColor: "#EDEEF1",
      widthAuto: false,
      width: "100",
      justifySelf: "center",
      hasBackgroundColor: false,
      borderStyle: "solid",
      borderWidth: "0",
      borderColor: "#927F73",
      borderTop: "0",
      borderBottom: "0",
      borderLeft: "0",
      borderRight: "0",
      borderControl: false,
      margin: "0",
      marginTop: "0",
      marginBottom: "0",
      marginLeft: "0",
      marginRight: "0",
      marginControl: false,
      padding: "0",
      paddingTop: "0",
      paddingBottom: "0",
      paddingLeft: "0",
      paddingRight: "0",
      paddingControl: true,
      zIndex: "1",
      borderRadius: "0",
      borderRadiusTopLeft: "0",
      borderRadiusTopRight: "0",
      borderRadiusBottomLeft: "0",
      borderRadiusBottomRight: "0",
      borderRadiusControl: false
    }
  });
  dispatch(setMenuArr(tempArr));
};

export const renameHeader = (
  menuObj,
  newHeader,
  pageLocation,
  sectionLocation,
  settingsObject
) => dispatch => {
  let tempObj = menuObj.map(i => i);
  tempObj[pageLocation].Content.splice(sectionLocation, 1, {
    Type: "header",
    Value: newHeader,
    Settings: tempObj[pageLocation].Content[sectionLocation].Settings
  });
  dispatch(setMenuArr(tempObj));
};

export const createNewSpacer = (
  menuObj,
  pageLocation,
  sectionLocation
) => dispatch => {
  let tempObj = menuObj.map(i => i);
  tempObj[pageLocation].Content.splice(sectionLocation, 0, {
    Type: "spacer",
    Value: 150,
    Settings: {
      backgroundColor: "#EDEEF1",
      width: "100",
      justifySelf: "center",
      hasBackgroundColor: true,
      widthAuto: false,
      borderStyle: "none",
      borderWidth: "2",
      borderColor: "#927F73",
      borderTop: "0",
      borderBottom: "0",
      borderLeft: "0",
      borderRight: "0",
      borderControl: false,
      margin: "0",
      marginTop: "0",
      marginBottom: "0",
      marginLeft: "0",
      marginRight: "0",
      marginControl: false,
      padding: "0",
      paddingTop: "0",
      paddingBottom: "0",
      paddingLeft: "0",
      paddingRight: "0",
      paddingControl: false,
      zIndex: "1",
      borderRadius: "0",
      borderRadiusTopLeft: "0",
      borderRadiusTopRight: "0",
      borderRadiusBottomLeft: "0",
      borderRadiusBottomRight: "0",
      borderRadiusControl: false
    }
  });
  dispatch(setMenuArr(tempObj));
};

export const updateSpacer = (
  menuObj,
  pageLocation,
  sectionLocation,
  value
) => dispatch => {
  let tempObj = menuObj.map(i => i);
  tempObj[pageLocation].Content[sectionLocation].Value = value;
  dispatch(setMenuArr(tempObj));
};

export const updatePageSetting = (
  menuObj,
  pageLocation,
  setting,
  value
) => dispatch => {
  let tempObj = menuObj.map(i => i);
  tempObj[pageLocation].Settings[setting] = value;
  dispatch(setMenuArr(tempObj));
};

export const updateSectionSetting = (
  menuObj,
  pageLocation,
  sectionLocation,
  setting,
  value
) => dispatch => {
  let tempObj = menuObj.map(i => i);
  tempObj[pageLocation].Content[sectionLocation].Settings[setting] = value;
  dispatch(setMenuArr(tempObj));
};

export const updateGlobalSetting = (
  globalsObj,
  category,
  setting,
  value
) => dispatch => {
  let tempObj = {};
  Object.keys(globalsObj).map(function(key, index) {
    tempObj[key] = globalsObj[key];
    return null;
  });
  tempObj[category][setting] = value;
  dispatch(setGlobalsObject(tempObj));
};

export const moveTreeSection = (
  menuObj,
  nodePage,
  nodeSection,
  nodeContainer,
  itemPage,
  itemSection,
  itemContainer
) => dispatch => {
  let tempObj = menuObj.map(i => i);
  console.log(nodeContainer, itemContainer);
  let same;

  ///check for same array
  //if same section and both have null container
  //if they have the same length address
  ///////if the container address is length 1 check for same section
  ///////length longer than 1, compare addresses up to (containerLocation.length - 2)
  ////////////slice off the last value of containerLocation in a tempArr and compare addresses
  if (nodeContainer === null && itemContainer === null) {
    same = true;
  } else if (nodeContainer === null || itemContainer === null) {
    same = false;
  } else {
    ///both have container location
    if (nodeContainer.length !== itemContainer.length) {
      //addresses are different length
      same = false;
    } else {
      //addresses are same length
      if (nodeContainer.length === 1) {
        ///addresses are only 1 long
        if (nodeSection === itemSection) {
          same = true;
        } else same = false;
      } else {
        ///addresses are the same length and longer than 1
        // check up to the last value for a deviation in the
        //address
        let tempNodeContainer = nodeContainer.map(e => {
          return { e };
        });
        let tempItemContainer = itemContainer.map(e => {
          return { e };
        });
        tempNodeContainer.splice(tempNodeContainer.length - 1, 1);
        tempItemContainer.splice(tempItemContainer.length - 1, 1);
        let isSame = true;
        tempNodeContainer.forEach((element, index) => {
          if (element.e !== tempItemContainer[index].e) {
            isSame = false;
          }
        });

        if (isSame) {
          same = true;
        } else same = false;
      }
    }
  }
  let fromSectionArray = tempObj[itemPage].Content;
  if (itemContainer !== null) {
    fromSectionArray = fromSectionArray[itemSection].Value;
    if (itemContainer.length > 1) {
      //Container address is longer than 1. Splice off the last value of the
      //address and forEach to the right array
      let tempItemContainer = itemContainer.map(e => {
        return { e };
      });
      tempItemContainer.splice(tempItemContainer.length - 1, 1);
      tempItemContainer.forEach((element, index) => {
        fromSectionArray = fromSectionArray[element.e].Value;
      });
    }
  }

  if (same) {
    console.log("same");
    //Movement is occuring only within one array, be a little more careful
    //if the endpoint address is more than 1 higher we're moving forward
    //if the endpoint address is the same or 1 higher than no change
    // if the endpoint is less than we are moving backwards
    let direction = "unkown";
    if (itemContainer === null) {
      //No container address, compare sections for address
      if (nodeSection < itemSection) {
        direction = "backwards";
      } else if (nodeSection - itemSection > 1) {
        direction = "forward";
      }
    } else {
      //Containers do have an address check the endpoints
      let nodeEndpoint;
      let itemEndpoint;
      nodeEndpoint = nodeContainer[nodeContainer.length - 1];
      itemEndpoint = itemContainer[itemContainer.length - 1];
      if (nodeEndpoint < itemEndpoint) {
        direction = "backwards";
      } else if (nodeEndpoint - itemEndpoint > 1) {
        direction = "forward";
      }
    }
    if (direction === "backwards") {
      console.log("backwards");
      //direction is backwards.
      let tempSection;
      let sectionArray = tempObj[nodePage].Content;
      if (itemContainer === null) {
        tempSection = sectionArray.splice(itemSection, 1);
        sectionArray.splice(nodeSection, 0, tempSection[0]);
      } else {
        //use last address position
        let nodeEndpoint;
        let itemEndpoint;
        nodeEndpoint = nodeContainer[nodeContainer.length - 1];
        itemEndpoint = itemContainer[itemContainer.length - 1];
        //UPDATE SECTION
        sectionArray = sectionArray[itemSection].Value;
        let tempAddressArray = nodeContainer.map(e => {
          return e;
        });
        tempAddressArray.splice(tempAddressArray.length - 1, 1);
        tempAddressArray.forEach((element, index) => {
          sectionArray = sectionArray[tempAddressArray[index]].Value;
        });
        //
        tempSection = sectionArray.splice(itemEndpoint, 1);
        sectionArray.splice(nodeEndpoint, 0, tempSection[0]);
      }
    } else if (direction === "forward") {
      console.log("Forward");
      //direction is forward
      let tempSection;
      let sectionArray = tempObj[nodePage].Content;
      if (itemContainer === null) {
        tempSection = sectionArray.splice(itemSection, 1);
        sectionArray.splice(nodeSection - 1, 0, tempSection[0]);
      } else {
        //use last address position
        let nodeEndpoint;
        let itemEndpoint;
        nodeEndpoint = nodeContainer[nodeContainer.length - 1];
        itemEndpoint = itemContainer[itemContainer.length - 1];
        //UPDATE SECTION
        sectionArray = sectionArray[itemSection].Value;
        let tempAddressArray = nodeContainer.map(e => {
          return e;
        });
        tempAddressArray.splice(tempAddressArray.length - 1, 1);
        tempAddressArray.forEach((element, index) => {
          sectionArray = sectionArray[tempAddressArray[index]].Value;
        });
        //
        tempSection = sectionArray.splice(itemEndpoint, 1);
        sectionArray.splice(nodeEndpoint - 1, 0, tempSection[0]);
      }
    }
  } else {
    //Movement is occuring across different arrays, be more straightforward
    //splice value from
    let toSectionArray = tempObj[nodePage].Content;
    if (nodeContainer !== null) {
      toSectionArray = toSectionArray[nodeSection].Value;
      if (nodeContainer.length > 1) {
        //Container address is longer than 1. Splice off the last value of the
        //address and forEach to the right array
        let tempNodeContainer = nodeContainer.map(e => {
          return { e };
        });
        tempNodeContainer.splice(tempNodeContainer.length - 1, 1);
        tempNodeContainer.forEach((element, index) => {
          toSectionArray = toSectionArray[element.e].Value;
        });
      }
    }
    let tempSection;
    if (itemContainer !== null) {
      tempSection = fromSectionArray.splice(
        itemContainer[itemContainer.length - 1],
        1,
        { Type: "column" }
      );
    } else {
      tempSection = fromSectionArray.splice(itemSection, 1);
    }
    if (nodeContainer !== null) {
      toSectionArray.splice(
        nodeContainer[nodeContainer.length - 1],
        1,
        tempSection[0]
      );
    } else {
      toSectionArray.splice(nodeSection, 0, tempSection[0]);
    }
  }

  dispatch(setMenuArr(tempObj));
};
