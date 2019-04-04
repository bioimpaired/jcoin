import axios from "axios";

const fetchUserDataBaseUrl = "http://jobcoin.gemini.com/parka/api/addresses/";

export const FETCH_USER_DATA = "FETCH_USER_DATA";

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
