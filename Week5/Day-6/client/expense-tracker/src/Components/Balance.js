import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { numberWithCommas } from "../utils/format";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  let amounts = [];
  let total = 0;
  if (transactions.length > 0) {
    amounts = transactions.map((transaction) => transaction.amount);
    total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  }

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{numberWithCommas(total)}$</h1>
    </>
  );
}
