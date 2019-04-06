import axios from "axios";

const fetchUserDataBaseUrl = "https://jobcoin.gemini.com/parka/api/addresses/";
const sendUrl = "https://jobcoin.gemini.com/parka/api/transactions";

export const FETCH_USER_DATA = "FETCH_USER_DATA";
export const SEND_JOBCOINS = "SEND_JOBCOINS";
export const SIGNOUT = "SIGNOUT";
export const SET_RESPONSE_MESSAGE = "SET_INPUT_MESESAGE";

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

export const sendJobcoin = (sendAddress, fromAddress, amount) => {
  return dispatch => {
    return axios
      .post(sendUrl, {
        fromAddress: fromAddress,
        toAddress: sendAddress,
        amount: amount
      })
      .then(response => {
        dispatch(fetchUserData(fromAddress));
      })
      .catch((error, response) => {
        // side effect of setting message and showing it
        dispatch({
          type: SET_RESPONSE_MESSAGE,
          payload: "Error. Please try again"
        });
      });
  };
};

export const resetResponseMessage = () => ({
  type: SET_RESPONSE_MESSAGE,
  payload: ""
});
