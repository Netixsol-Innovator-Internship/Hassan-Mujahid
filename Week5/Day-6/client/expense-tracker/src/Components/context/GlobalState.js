import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  transactions: [],
  loading: true,
  error: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTransactions = async () => {
    try {
      const res = await axios.get("https://expense-server-kappa.vercel.app/");
      dispatch({
        type: "GET_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
      console.log(err);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(
        `https://expense-server-kappa.vercel.app/delete/${id}`
      );
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
      console.log(err);
    }
  };
  const addTransaction = async (transaction) => {
    const config = {
      "Content-type": "application/json",
    };
    try {
      const res = await axios.post(
        "https://expense-server-kappa.vercel.app/add",
        transaction,
        config
      );

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
      console.log(err);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
