import React, { createContext, useContext, useReducer } from "react";

/**
 * @returns context, prepares the data layer.
 */

export const StateContext = createContext();

/**
 *
 * @param {*} param0
 * @returns Wrap our app and provide the data layer.
 */

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

/**
 *
 * @returns Pull information from the data layer.
 */

export const useStateValue = () => useContext(StateContext);
