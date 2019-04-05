import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
        <div className="clearfix align-middle">
          <div style={styles.userName} className="float-left">
            {currentUserJobcoinAddress}
          </div>
          <div style={styles.signout} className="float-right">
            <Button onClick={handleSignout}>Sign out</Button>
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
  userName: {
    margin: 10
  },
  signout: {
    margin: 5
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

Navbar.propTypes = {
  currentUserJobcoinAddress: PropTypes.string.isRequired,
  signout: PropTypes.func.isRequired
};
