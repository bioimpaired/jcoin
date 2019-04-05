import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginPage from "./containers/LoginPage";
import Dashboard from "./containers/Dashboard";
import Navbar from "./containers/Navbar";

class App extends Component {
  render() {
    const { currentUserJobcoinAddress } = this.props;
    return (
      <div className="App">
        {currentUserJobcoinAddress ? (
          <div>
            <Navbar />
            <Dashboard />
          </div>
        ) : (
          <LoginPage />
        )}
      </div>
    );
  }
}

export default connect(state => ({
  currentUserJobcoinAddress: state.mainReducer.currentUserJobcoinAddress,
  stateHere: state
}))(App);

App.propTypes = {
  currentUserJobcoinAddress: PropTypes.string
};
