import {
  SET_TREE_HOVER,
  SET_TREE_FOCUS,
  TOGGLE_SETTINGS_OPEN,
  TOGGLE_PAGE_DRAGGING,
  SET_ELEMENT_TYPE,
  SET_TREE_DRAG
} from "../actions/types";

const initialState = {
  treeHoverPage: null,
  treeHoverSection: null,
  treeHoverContainer: null,
  treeFocusPage: null,
  treeFocusSection: null,
  treeFocusContainer: null,
  treeDragPage: null,
  treeDragSection: null,
  treeDragContainer: null,
  settingsOpen: false,
  pageIsDragging: false,
  newElementType: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TREE_HOVER:
      return {
        ...state,
        treeHoverPage: action.payload.pageLocation,
        treeHoverSection: action.payload.sectionLocation,
        treeHoverContainer: action.payload.containerLocation
      };
    case SET_TREE_FOCUS:
      return {
        ...state,
        treeFocusPage: action.payload.pageLocation,
        treeFocusSection: action.payload.sectionLocation,
        treeFocusContainer: action.payload.containerLocation
      };
    case SET_TREE_DRAG:
      return {
        ...state,
        treeDragPage: action.payload.pageLocation,
        treeDragSection: action.payload.sectionLocation,
        treeDragContainer: action.payload.containerLocation
      };
    case TOGGLE_SETTINGS_OPEN:
      return {
        ...state,
        settingsOpen: !state.settingsOpen
      };
    case TOGGLE_PAGE_DRAGGING:
      return {
        ...state,
        pageIsDragging: action.payload
      };
    case SET_ELEMENT_TYPE:
      return {
        ...state,
        newElementType: action.payload
      };
    default:
      return state;
  }
}
