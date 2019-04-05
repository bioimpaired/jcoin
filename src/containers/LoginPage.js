import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Toast,
  ToastBody,
  ToastHeader
} from "reactstrap";

import { fetchUserData } from "../actions/mainActions";

const LoginPage = ({ fetchUserData }) => {
  const [jobcoinAddress, setJobcoinAddress] = useState("");

  const handleOnSubmit = e => {
    e.preventDefault();

    fetchUserData(jobcoinAddress);
    // clear form?
  };

  const handleTextInput = e => {
    setJobcoinAddress(e.target.value);
  };

  return (
    <Container>
      <Toast style={styles.toast}>
        <ToastHeader>Welcome! Sign in with your job coin address</ToastHeader>
        <ToastBody>
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for="jobcoinAddress">Jobcoin Address</Label>
              <Input
                onChange={handleTextInput}
                type="text"
                id="jobcoinAddress"
              />
            </FormGroup>
            <Button>Sign In</Button>
          </Form>
        </ToastBody>
      </Toast>
    </Container>
  );
};

const styles = {
  toast: {
    margin: "200px auto"
  }
};

export default connect(
  null,
  dispatch => ({
    fetchUserData: jobcoinAddress => dispatch(fetchUserData(jobcoinAddress))
  })
)(LoginPage);
