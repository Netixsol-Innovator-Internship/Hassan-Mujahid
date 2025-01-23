import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const positveAmounts = amounts.filter((amount) => amount > 0);
  const negativeAmounts = amounts.filter((amount) => amount < 0);

  const income = positveAmounts
    .reduce((acc, item) => acc + Math.abs(item), 0)
    .toFixed(2);
  const expense = negativeAmounts
    .reduce((acc, item) => acc + Math.abs(item), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
}
