import React, { Component } from "react";
import { connect } from "react-redux";
import LoginPage from "./components/LoginPage";
import Dashboard from "./containers/Dashboard";

class App extends Component {
  render() {
    const { currentUserJobcoinAddress } = this.props;

    return (
      <div className="App">
        {currentUserJobcoinAddress ? <Dashboard /> : <LoginPage />}
      </div>
    );
  }
}

export default connect(state => ({
  currentUserJobcoinAddress: state.mainReducer.currentUserJobcoinAddress,
  stateHere: state
}))(App);
