import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

const TransactionsGraph = ({ transactions, currentUserJobcoinAddress }) => {
  // put into utils
  const balances = [];
  let timeStamps = [];

  let total = 0;
  if (transactions) {
    const transactionss = transactions.map(transaction => {
      // change to current user
      if (transaction.toAddress !== currentUserJobcoinAddress) {
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
    timeStamps = transactions.map(transaction => {
      const dateObject = new Date(transaction.timestamp);
      const time = dateObject.toLocaleString();
      return time;
    });
  }

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
    <div style={styles.border}>
      <div style={styles.graphTitle}>Jobcoin History Graph</div>
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

TransactionsGraph.propTypes = {
  currentUserJobcoinAddress: PropTypes.string,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      fromAddress: PropTypes.string,
      toAddress: PropTypes.string,
      amount: PropTypes.string,
      time: PropTypes.string
    })
  )
};

const styles = {
  graphTitle: {
    borderBottom: "1px solid rgba(0,0,0,.05)",
    padding: 10
  },
  border: {
    border: "1px solid rgba(0,0,0,.05)",
    borderRadius: 5
  }
};

export default TransactionsGraph;
