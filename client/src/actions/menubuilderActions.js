//import axios from "axios";

import {
  GET_MENU_BUILT,
  GET_MENU_ARR,
  SET_MENU_ARRAY,
  GET_PAGE_FOCUS
} from "./types";

//Get current menu
export const getMenuObj = () => {
  return {
    type: GET_MENU_BUILT,
    payload: [
      { Title: "Lunches", Content: "Lunch Menu" },
      { Title: "Dinners", Content: "Dinners Menu" },
      { Title: "Appetizers", Content: "Appetizer Menu" },
      { Title: "Desserts", Content: "Dessert Menu" },
      { Title: "Drinks", Content: "Drinks Menu" },
      { Title: "Specials", Content: "Specials" }
    ]
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

export const setPageFocus = newfocus => {
  return {
    type: GET_PAGE_FOCUS,
    payload: newfocus
  };
};

export const deleteMenuPage = (menuObj, index) => dispatch => {
  menuObj.splice(index, 1);
  dispatch(setMenuArr(menuObj));
};

export const moveMenuPage = (menuObj, index, dir) => dispatch => {
  if (dir === 1) {
    ///direction is up, move backwards in array
    let newArr = menuObj.splice(index, 1);
    menuObj.splice(index - 1, 0, newArr[0]);
  } else {
    ///direction is down, move forward in array
    let newArr = menuObj.splice(index, 1);
    menuObj.splice(index + 1, 0, newArr[0]);
  }
  dispatch(setMenuArr(menuObj));
};

export const addMenuPage = (menuObj, newPage) => dispatch => {
  let newObj = { Title: newPage, Content: newPage + " Menu" };
  menuObj.push(newObj);
  dispatch(setMenuArr(menuObj));
};

export const renameMenuPage = (menuObj, pageTitle, index) => dispatch => {
  let pageObj = { Title: pageTitle, Content: menuObj[index].Content };
  menuObj.splice(index, 1, pageObj);
  dispatch(setMenuArr(menuObj));
};
