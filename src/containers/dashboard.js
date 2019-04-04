import React from "react";
import { connect } from "react-redux";

import { Container, Row, Col } from "reactstrap";

const Dashboard = ({}) => {
  return (
    <div>
      <Container>
        <Row>dashboard login</Row>
        <Row>
          <Col sm="4">leftPanel</Col>
          <Col sm="8">Rigth pannel</Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(
  null,
  null
)(Dashboard);
