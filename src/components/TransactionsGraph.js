import React from "react";
import { Line } from "react-chartjs-2";

const TransactionsGraph = ({ transactions }) => {
  // put into utils
  const balances = [];
  let total = 0;
  const transactionss = transactions.map(transaction => {
    if (transaction.toAddress != "Alice") {
      return parseFloat(-transaction.amount);
    } else {
      return parseFloat(transaction.amount);
    }
  });
  transactionss.forEach(transaction => {
    total += transaction;
    balances.push(total);
  });

  // convert to time
  const timeStamps = transactions.map(transaction => {
    const dateObject = new Date(transaction.timestamp);
    const time = dateObject.toLocaleString();
    return time;
  });

  const chartData = {
    labels: timeStamps,
    datasets: [
      {
        label: "Balance",
        data: balances
      }
    ]
  };

  return (
    <div>
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Transaction History",
            fontSize: 25
          },
          legend: {
            display: true,
            position: "bottom"
          }
        }}
      />
    </div>
  );
};

export default TransactionsGraph;
