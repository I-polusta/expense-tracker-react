import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";
//Initial state
const initialState = {
  transactions: [],
};

//Create Context

export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispacth] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispacth({
      type: "DELETE__TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispacth({
      type: "ADD__TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
