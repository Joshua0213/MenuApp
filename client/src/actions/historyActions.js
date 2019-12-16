// import { GET_MENU_BUILT, GET_MENU_ARR, ADD_TO_HISTORY } from "./types";

// //Get current menu
// export const getIt = () => {
//   return {
//     type: GET_MENU_BUILT,
//     payload: {
//       menuArr: [
//         {
//           Title: "Lunches",
//           Content: [
//             {
//               Type: "header",
//               Value: "Lunch Menu",
//               Settings: {
//                 fontSize: "80px",
//                 InheritfontSize: true,
//                 backgroundColor: null,
//                 InheritbackgroundColor: true
//               }
//             },
//             {
//               Type: "header",
//               Value: "Other Header",
//               Settings: {
//                 fontSize: "70px",
//                 InheritfontSize: false,
//                 backgroundColor: "#DDF3C6",
//                 InheritbackgroundColor: false
//               }
//             },
//             { Type: "spacer", Value: "300" },
//             {
//               Type: "header",
//               Value: "Another Header!",
//               Settings: {
//                 fontSize: "30px",
//                 InheritfontSize: true,
//                 backgroundColor: null,
//                 InheritbackgroundColor: true
//               }
//             }
//           ],
//           Settings: {
//             backgroundColor: null,
//             InheritbackgroundColor: true
//           }
//         },
//         {
//           Title: "Dinners",
//           Content: [
//             {
//               Type: "header",
//               Value: "Dinner Menu",
//               Settings: {
//                 fontSize: "80px",
//                 InheritfontSize: false,
//                 backgroundColor: null,
//                 InheritbackgroundColor: true
//               }
//             }
//           ],
//           Settings: {
//             backgroundColor: "#F0E8E8",
//             InheritbackgroundColor: false
//           }
//         }
//       ],
//       globalsObj: {
//         headers: { GfontSize: "35px", GbackgroundColor: "#E49696" },
//         menu: { backgroundColor: "#EEE8D9" }
//       }
//     }
//   };
// };

// //
// //
// //
// //
// //
// //
// export const addToHistory = menuArr => {
//   console.log("add");
//   return {
//     type: ADD_TO_HISTORY,
//     payload: menuArr
//   };
// };
