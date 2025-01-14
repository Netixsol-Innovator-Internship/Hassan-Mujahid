import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          return (
            <li className="minus" key={transaction.id}>
              {transaction.text} <span>{transaction.amount}</span>
              <button className="delete-btn">x</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
