import React, { Component } from "react";
import { connect } from "react-redux";
import LoginPage from "./components/LoginPage";

class App extends Component {
  render() {
    const { currentUserJobcoinAddress } = this.props;
    console.log("app", this.props);

    return (
      <div className="App">
        {currentUserJobcoinAddress ? <div>loggedin</div> : <LoginPage />}
      </div>
    );
  }
}

export default connect(state => ({
  currentUserJobcoinAddress: state.mainReducer.currentUserJobcoinAddress
}))(App);
