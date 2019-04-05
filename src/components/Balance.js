import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const Balance = ({ balance }) => {
  return (
    <Toast>
      <ToastHeader>Balance</ToastHeader>
      <ToastBody>{balance}</ToastBody>
    </Toast>
  );
};

export default Balance;
