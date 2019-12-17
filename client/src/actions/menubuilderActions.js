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
  SET_SECTION_FOCUS
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
                width: "30",
                justifySelf: "start",
                hasBackgroundColor: false,
                borderStyle: "solid",
                borderWidth: "5",
                borderColor: "#927F73",
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
                paddingControl: false
              }
            },
            {
              Type: "header",
              Value: "Other Header",
              Settings: {
                fontSize: "70px",
                InheritfontSize: false,
                backgroundColor: "#DDF3C6",
                width: "70",
                justifySelf: "center",
                hasBackgroundColor: true,
                borderStyle: "solid",
                borderWidth: "3",
                borderColor: "#927F73",
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
                paddingControl: false
              }
            },
            {
              Type: "spacer",
              Value: "300",
              Settings: {
                backgroundColor: "#EDEEF1",
                width: "50",
                justifySelf: "center",
                hasBackgroundColor: true,
                borderStyle: "none",
                borderWidth: "2",
                borderColor: "#927F73",
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
                paddingControl: false
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
                borderColor: "#927F73",
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
                paddingControl: false
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
                justifySelf: "center",
                hasBackgroundColor: false,
                borderStyle: "none",
                borderWidth: "2",
                borderColor: "#927F73",
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
                paddingControl: false
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
          width: "100",
          justifySelf: "center",
          hasBackgroundColor: false,
          borderStyle: "none",
          borderWidth: "2",
          borderColor: "#927F73",
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
          paddingControl: false
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
      width: "100",
      justifySelf: "center",
      hasBackgroundColor: false,
      borderStyle: "none",
      borderWidth: "2",
      borderColor: "#927F73",
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
      paddingControl: false
    }
  });
  dispatch(setMenuArr(tempObj));
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
      borderStyle: "none",
      borderWidth: "2",
      borderColor: "#927F73",
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
      paddingControl: false
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
  console.log(tempObj);
  tempObj[category][setting] = value;
  dispatch(setGlobalsObject(tempObj));
};
