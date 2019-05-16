import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reactstrap";

import Balance from "../components/Balance";
import TransactionsGraph from "../components/TransactionsGraph";
import TransferWidget from "../components/TransferWidget";

import { sendJobcoin, resetResponseMessage } from "../actions/mainActions";

const Dashboard = ({ props, sendJobcoin, resetResponseMessage }) => {
  const {
    balance,
    currentUserJobcoinAddress,
    transactions,
    responseMessage
  } = props;
  return (
    <div>
      <Container>
        <Row>
          <Col sm="4">
            <Balance balance={balance} />
            <TransferWidget
              sendJobcoin={sendJobcoin}
              currentUserJobcoinAddress={currentUserJobcoinAddress}
              responseMessage={responseMessage}
              resetResponseMessage={resetResponseMessage}
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
    balance: PropTypes.number,
    currentUserJobcoinAddress: PropTypes.string,
    responseMessage: PropTypes.string,
    resetResponseMessage: PropTypes.func,
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        fromAddress: PropTypes.string,
        toAddress: PropTypes.string,
        amount: PropTypes.number,
        time: PropTypes.string
      })
    )
  })
};

export default connect(
  state => ({ props: state.mainReducer }),
  dispatch => ({
    sendJobcoin: (sendAddress, fromAddress, amount) =>
      dispatch(sendJobcoin(sendAddress, fromAddress, amount)),
    resetResponseMessage: () => dispatch(resetResponseMessage())
  })
)(Dashboard);
