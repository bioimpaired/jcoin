import axios from "axios";

const fetchUserDataBaseUrl = "http://jobcoin.gemini.com/parka/api/addresses/";
const sendUrl = "http://jobcoin.gemini.com/parka/api/transactions";

export const FETCH_USER_DATA = "FETCH_USER_DATA";
export const SEND_JOBCOINS = "SEND_JOBCOINS";
export const SIGNOUT = "SIGNOUT";

export const signout = () => {
  return {
    type: SIGNOUT,
    payload: null
  };
};

export const fetchUserData = jobcoinAddress => {
  return dispatch => {
    const fetchUserDataUrl = fetchUserDataBaseUrl + jobcoinAddress;
    return axios.get(fetchUserDataUrl).then(response => {
      // handle success and failure?
      dispatch({
        type: FETCH_USER_DATA,
        payload: {
          currentUserJobcoinAddress: jobcoinAddress,
          ...response.data
        }
      });
    });
  };
};

// fix this

export const sendJobcoin = (sendAddress, fromAddress, amount) => {
  return dispatch => {
    return axios
      .post(
        sendUrl,
        {
          fromAddress: fromAddress,
          toAddress: sendAddress,
          amount: amount
        },
        {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/plain, application/json, charset=utf-8",
          "Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, PATCH, DELETE",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
      )
      .then(response => {
        // handle success and failure?
        // if (response.data.redirect == "/") {
        //   window.location = "/index";
        // } else if (response.data.redirect == "/login") {
        //   window.location = "/login";
        // }

        // grab data again and reload page?
        console.log(
          "sent action finsihed",
          sendAddress,
          fromAddress,
          amount,
          response
        );

        // reload page with updated data
        dispatch(fetchUserData(fromAddress));
      });
  };
};
