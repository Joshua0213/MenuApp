//import axios from "axios";

import { GET_MENU_BUILT } from "./types";

//Get current menu
export const getMenu = () => {
  return {
    type: GET_MENU_BUILT,
    payload: [
      { Title: "Lunches", Content: "Lunch Menu" },
      { Title: "Appetizers", Content: "Appetizer Menu" },
      { Title: "Desserts", Content: "Dessert Menu" },
      { Title: "Drinks", Content: "Drinks Menu" },
      { Title: "Specials", Content: "Specials" }
    ]
  };
};
