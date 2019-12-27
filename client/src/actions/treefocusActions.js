import {
  SET_TREE_HOVER,
  SET_TREE_FOCUS,
  TOGGLE_SETTINGS_OPEN,
  TOGGLE_PAGE_DRAGGING
} from "./types";

const setHoverFocus = focusObj => {
  return {
    type: SET_TREE_HOVER,
    payload: focusObj
  };
};

const setMainFocus = focusObj => {
  return {
    type: SET_TREE_FOCUS,
    payload: focusObj
  };
};

export const setTreeHoverFocus = (
  pageLoc,
  sectionLoc,
  containerLoc
) => dispatch => {
  let focusObj = {
    pageLocation: pageLoc,
    sectionLocation: sectionLoc,
    containerLocation: containerLoc
  };
  dispatch(setHoverFocus(focusObj));
};

export const setTreeMainFocus = (
  pageLoc,
  sectionLoc,
  containerLoc
) => dispatch => {
  let focusObj = {
    pageLocation: pageLoc,
    sectionLocation: sectionLoc,
    containerLocation: containerLoc
  };
  dispatch(setMainFocus(focusObj));
};

export const toggleSettingsOpen = () => {
  return {
    type: TOGGLE_SETTINGS_OPEN
  };
};

export const togglePageIsDragging = boolean => {
  return {
    type: TOGGLE_PAGE_DRAGGING,
    payload: boolean
  };
};

export const setTreeHoverFocusFromPage = (
  pageLoc,
  sectionLoc,
  containerLoc,
  direction
) => dispatch => {
  let focusObj;
  if (direction === "enter") {
    focusObj = {
      pageLocation: pageLoc,
      sectionLocation: sectionLoc,
      containerLocation: containerLoc
    };
  }
  if (direction === "exit") {
    if (containerLoc === null) {
      focusObj = {
        pageLocation: null,
        sectionLocation: null,
        containerLocation: null
      };
    } else if (containerLoc.length === 1) {
      focusObj = {
        pageLocation: pageLoc,
        sectionLocation: sectionLoc,
        containerLocation: null
      };
    } else {
      // container location is longer than 1
      //remove the last value from the address and
      //serve it as the new containerLocation
      containerLoc.splice(containerLoc.length - 1, 1);
      focusObj = {
        pageLocation: pageLoc,
        sectionLocation: sectionLoc,
        containerLocation: containerLoc
      };
    }
  }
  dispatch(setHoverFocus(focusObj));
};
