import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reactstrap";

import Balance from "../components/Balance";
import TransactionsGraph from "../components/TransactionsGraph";
import TransferWidget from "../components/TransferWidget";

import { sendJobcoin } from "../actions/mainActions";

const Dashboard = ({ props, sendJobcoin }) => {
  const { balance, currentUserJobcoinAddress, transactions } = props;
  return (
    <div>
      <Container>
        <Row>
          <Col sm="4">
            <Balance balance={balance} />
            <TransferWidget
              sendJobcoin={sendJobcoin}
              currentUserJobcoinAddress={currentUserJobcoinAddress}
            />
          </Col>
          <Col sm="8">
            <TransactionsGraph
              transactions={transactions}
              currentUserJobcoinAddress={currentUserJobcoinAddress}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Dashboard.propTypes = {
  sendJobcoin: PropTypes.func.isRequired,
  props: PropTypes.shape({
    balance: PropTypes.string,
    currentUserJobcoinAddress: PropTypes.string,
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        fromAddress: PropTypes.string,
        toAddress: PropTypes.string,
        amount: PropTypes.string,
        time: PropTypes.string
      })
    )
  })
};

export default connect(
  state => ({ props: state.mainReducer }),
  dispatch => ({
    sendJobcoin: (sendAddress, fromAddress, amount) =>
      dispatch(sendJobcoin(sendAddress, fromAddress, amount))
  })
)(Dashboard);
