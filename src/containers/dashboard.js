import React from "react";
import { connect } from "react-redux";

import { Container, Row, Col } from "reactstrap";

import Balance from "../components/Balance";
import TransactionsGraph from "../components/TransactionsGraph";
import TransferWidget from "../components/TransferWidget";

import { sendJobcoin } from "../actions/mainActions";

const Dashboard = ({ props, sendJobcoin }) => {
  console.log("dashboard", props);
  const { balance, currentUserJobcoinAddress, transactions } = props;
  return (
    <div>
      <Container>
        {/* make this into its own container? navbar*/}
        <Row>{currentUserJobcoinAddress} login</Row>
        <Row>
          <Col sm="4">
            <Balance balance={balance} />
            <TransferWidget
              sendJobcoin={sendJobcoin}
              currentUserJobcoinAddress={currentUserJobcoinAddress}
            />
          </Col>
          <Col sm="8">
            <TransactionsGraph transactions={transactions} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(
  state => ({ props: state.mainReducer }),
  dispatch => ({
    sendJobcoin: (sendAddress, fromAddress, amount) =>
      dispatch(sendJobcoin(sendAddress, fromAddress, amount))
  })
)(Dashboard);
