import axios from "axios";

const fetchUserDataBaseUrl = "http://jobcoin.gemini.com/parka/api/addresses/";
const sendUrl = "http://jobcoin.gemini.com/parka/api/transactions";

export const FETCH_USER_DATA = "FETCH_USER_DATA";
export const SEND_JOBCOINS = "SEND_JOBCOINS";

export const fetchUserData = jobcoinAddress => {
  console.log("action", jobcoinAddress);
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
    console.log("sent action", sendAddress, fromAddress, amount);
    return axios
      .post(
        sendUrl,
        {
          fromAddress: fromAddress,
          toAddress: sendAddress,
          amount: amount
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        // handle success and failure?
      })
      .then(() => {
        // get data and push into redux
        dispatch({
          type: "nothing",
          payload: {}
        });
      });
  };
};
