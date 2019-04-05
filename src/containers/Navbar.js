import React from "react";
import { connect } from "react-redux";

import { Container, Button } from "reactstrap";

import { signout } from "../actions/mainActions";

const Navbar = ({ currentUserJobcoinAddress, signout }) => {
  const handleSignout = e => {
    e.preventDefault();
    signout();
  };
  return (
    <div style={styles.navbar}>
      <Container>
        <div class="clearfix">
          <div class="float-left align-middle">{currentUserJobcoinAddress}</div>
          <div class="float-right">
            <Button style={styles.signout} onClick={handleSignout}>
              Sign out
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

const styles = {
  navbar: {
    height: 50,
    borderBottom: "1px solid rgba(0,0,0,.05)",
    marginBottom: 20,
    width: "100%"
  },
  signout: {
    margin: "auto 10"
  }
};

export default connect(
  state => ({
    currentUserJobcoinAddress: state.mainReducer.currentUserJobcoinAddress
  }),
  dispatch => ({
    signout: () => dispatch(signout())
  })
)(Navbar);
