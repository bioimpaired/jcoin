import React from "react";
import { connect } from "react-redux";

import { Container, Row, Col } from "reactstrap";

import Balance from "../components/Balance";
import TransactionsGraph from "../components/TransactionsGraph";

const Dashboard = ({ props }) => {
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
            <div>widget</div>
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
  null
)(Dashboard);
