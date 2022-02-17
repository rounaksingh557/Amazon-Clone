import React, { createContext, useContext, useReducer } from "react";

/**
 * @returns context
 */
export const StateContext = createContext();

/**
 *
 * @param {*} param0
 * @returns StateProvider
 */

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

/**
 *
 * @returns stateContext
 */

export const useStateValue = () => useContext(StateContext);
