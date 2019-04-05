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
    // return axios
    //   .post(
    //     sendUrl,
    //     // +
    //     //   `?fromAddress=${fromAddress}&
    //     // toAddress=${sendAddress}&
    //     // amount=${amount}`,
    //     {
    //       fromAddress: fromAddress,
    //       toAddress: sendAddress,
    //       amount: amount
    //     },
    //     {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json"
    //     }
    //   )
    //   .then(response => {
    //     // handle success and failure?
    //     if (response.data.redirect == "/") {
    //       window.location = "/index";
    //     } else if (response.data.redirect == "/login") {
    //       window.location = "/login";
    //     }
    //     console.log(
    //       "sent action finsihed",
    //       sendAddress,
    //       fromAddress,
    //       amount,
    //       response
    //     );
    //   })

    return fetch(sendUrl, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        fromAddress: fromAddress,
        toAddress: sendAddress,
        amount: amount
      })
    }).then(response => {
      //do something awesome that makes the world a better place
      console.log("finished post", response);
      dispatch({
        type: "nothing",
        payload: {}
      });
    });
    // .then(() => {
    //   // get data and push into redux

    // });
  };
};
