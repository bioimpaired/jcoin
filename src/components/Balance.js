import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import PropTypes from "prop-types";

const Balance = ({ balance }) => {
  return (
    <Toast>
      <ToastHeader>Balance</ToastHeader>
      <ToastBody>{balance}</ToastBody>
    </Toast>
  );
};

Balance.propTypes = {
  balance: PropTypes.string
};

export default Balance;
