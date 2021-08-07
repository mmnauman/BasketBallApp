import React, { useReducer } from "react";
import { Reducer } from "./stateManagement/Reducer";

const initialState = {
  team: [
    {
      firstName: "John",
      lastName: "Doe",
      id: 1,
      position: [{ label: "Point Guard (PG)", value: 1 }],
    },
    {
      firstName: "John",
      lastName: "Doe2",
      id: 2,

      position: [{ label: "Shooting Guard (SG)", value: 2 }],
    },
    {
      firstName: "John",
      lastName: "Doe3",
      id: 3,
      position: [{ label: "Small Forward (SF)", value: 3 }],
    },
    {
      firstName: "John",
      lastName: "Doe4",
      id: 4,
      position: [{ label: "Power Forward (PF)", value: 4 }],
    },
    // {
    //   firstName: "John",
    //   lastName: "Doe5",
    //   id: 5,
    //   position: [{ label: "Center (C)", value: 5 }],
    // },
  ],
};

// const initialState = {
//   team: [
//     {
//       firstName: "John",
//       lastName: "Doe",
//       playerRole: [{ value: 1, label: "Point Guard (PG)" }],
//     },
//     {
//       firstName: "John",
//       lastName: "Doe2",
//       playerRole: [
//         {
//           id: 2,
//           position: "Shooting Guard (SG)",
//         },
//       ],
//     },
//     {
//       firstName: "John",
//       lastName: "Doe3",
//       playerRole: [
//         {
//           id: 3,
//           position: "Small Forward (SF)",
//         },
//       ],
//     },
//     {
//       firstName: "John",
//       lastName: "Doe4",
//       playerRole: [
//         {
//           id: 4,
//           position: "Power Forward (PF)",
//         },
//       ],
//     },
//     {
//       firstName: "John",
//       lastName: "Doe5",
//       playerRole: [{ id: 5, position: "Center (C)" }],
//     },
//     {
//       firstName: "John",
//       lastName: "Doe6",
//       playerRole: [{ id: 6, position: "Center (C)" }],
//     },
//   ],
// };

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = React.createContext(initialState);
export default Store;
