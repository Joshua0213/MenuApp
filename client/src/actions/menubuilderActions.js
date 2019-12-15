//import axios from "axios";

import {
  GET_MENU_BUILT,
  GET_MENU_ARR,
  SET_MENU_ARRAY,
  GET_PAGE_FOCUS,
  GET_GLOBALS_OBJECT,
  SET_GLOBALS_OBJECT,
  SET_SIDEBAR_WIDTH
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
              Settings: { fontSize: "40px" }
            },
            {
              Type: "header",
              Value: "Other Header",
              Settings: { fontSize: null }
            },
            { Type: "spacer", Value: "300" },
            {
              Type: "header",
              Value: "Another Header!",
              Settings: { fontSize: "90px" }
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
              Settings: { fontSize: "30px" }
            }
          ],
          Settings: {
            backgroundColor: "#F0E8E8",
            InheritbackgroundColor: false
          }
        }
      ],
      globalsObj: {
        headers: { fontSize: "20px" },
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

export const getGlobalsObject = globalObj => {
  return {
    type: GET_GLOBALS_OBJECT,
    payload: globalObj
  };
};

const setGlobalsObject = globalObj => {
  return {
    type: SET_GLOBALS_OBJECT,
    payload: globalObj
  };
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
      { Type: "header", Value: newPage + " Menu", Settings: { fontSize: null } }
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
    Settings: { fontSize: null }
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
    Value: 150
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

export const updateGlobalSetting = (
  globalsObj,
  category,
  setting,
  value
) => dispatch => {
  console.log(globalsObj);
  let tempObj = {};
  Object.keys(globalsObj).map(function(key, index) {
    tempObj[key] = globalsObj[key];
    return null;
  });
  tempObj[category][setting] = value;
  dispatch(setGlobalsObject(tempObj));
};
