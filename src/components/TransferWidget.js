import React, { useState } from "react";
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

const TransferWidget = ({ sendJobcoin, currentUserJobcoinAddress }) => {
  const [destinationAddress, setDestinationAddress] = useState("");
  const [sendAmount, setSendAmount] = useState("");

  const handleInputChange = e => {
    if (e.target.name === "sendAmount") {
      setSendAmount(e.target.value);
    }

    if (e.target.name === "destinationAddress") {
      setDestinationAddress(e.target.value);
    }
    console.log(destinationAddress, sendAmount);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log(destinationAddress, sendAmount);

    sendJobcoin(destinationAddress, currentUserJobcoinAddress, sendAmount);

    setSendAmount("");
    setDestinationAddress("");
    console.log("sent", destinationAddress, sendAmount);
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

export default TransferWidget;
