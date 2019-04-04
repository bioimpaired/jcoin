import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <div> Welcome! Sign in with your job coin address</div>
        <Label for="jobcoinAddress">Jobcoin Address</Label>
        <Input
          onChange={handleTextInput}
          type="text"
          name="jobcoinAddress"
          id="jobcoinAddress"
        />
      </FormGroup>
      <Button>Sign In</Button>
    </Form>
  );
};

export default connect(
  null,
  dispatch => ({
    fetchUserData: jobcoinAddress => dispatch(fetchUserData(jobcoinAddress))
  })
)(LoginPage);
