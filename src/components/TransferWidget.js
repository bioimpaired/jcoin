import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Toast,
  ToastBody,
  ToastHeader
} from "reactstrap";

const TransferWidget = ({
  sendJobcoin,
  currentUserJobcoinAddress,
  responseMessage,
  resetResponseMessage
}) => {
  const [destinationAddress, setDestinationAddress] = useState("");
  const [sendAmount, setSendAmount] = useState("");

  const handleInputChange = e => {
    resetResponseMessage();

    if (e.target.name === "sendAmount") {
      setSendAmount(e.target.value);
    }

    if (e.target.name === "destinationAddress") {
      setDestinationAddress(e.target.value);
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    sendJobcoin(destinationAddress, currentUserJobcoinAddress, sendAmount);
    setSendAmount("");
    setDestinationAddress("");
  };

  return (
    <Toast>
      <ToastHeader>Send Jobcoin</ToastHeader>
      <ToastBody>
        <Form onSubmit={handleOnSubmit}>
          <FormGroup>
            <Label for="destinationAddress">Destination Address</Label>
            <Input
              onChange={handleInputChange}
              value={destinationAddress}
              type="text"
              name="destinationAddress"
              id="destinationAddress"
            />
            <Label for="sendAmount">Amount to Send</Label>
            <Input
              onChange={handleInputChange}
              type="text"
              value={sendAmount}
              name="sendAmount"
              id="sendAmount"
            />
            {responseMessage && (
              <div className="text-danger">{responseMessage}</div>
            )}
          </FormGroup>
          <Button style={styles.sendButton}>Send Jobcoins</Button>
        </Form>
      </ToastBody>
    </Toast>
  );
};

const styles = {
  sendButton: {
    width: "100%"
  }
};

TransferWidget.propTypes = {
  sendJobcoin: PropTypes.func.isRequired,
  currentUserJobcoinAddress: PropTypes.string,
  responseMessage: PropTypes.string,
  resetResponseMessage: PropTypes.func
};

export default TransferWidget;
