import {
  SET_PAGE_WIDTH,
  GET_MENU_ARRAY,
  SET_PAGE_ARRAY,
  SET_PAGE_RENDER
} from "./types";

export const setPageWidth = newWidth => {
  return {
    type: SET_PAGE_WIDTH,
    payload: newWidth
  };
};

export const setPageRender = page => {
  return {
    type: SET_PAGE_RENDER,
    payload: page
  };
};

const setPageArray = tempArr => {
  let newtempArr = [];
  tempArr.forEach(element => {
    newtempArr.push(element);
  });
  return {
    type: SET_PAGE_ARRAY,
    payload: newtempArr
  };
};

export const getMenuArray = () => dispatch => {
  let tempMenuArray = [
    {
      Title: "Lunch",
      Sections: [],
      Settings: {
        backgroundColor: "#66ff00"
      }
    },
    {
      Title: "Dinner",
      Sections: [],
      Settings: {
        backgroundColor: "#66ff00"
      }
    }
  ];
  dispatch(setPageArray(tempMenuArray));
  return {
    type: GET_MENU_ARRAY,
    payload: tempMenuArray
  };
};
