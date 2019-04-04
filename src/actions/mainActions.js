export const FETCH_USER_DATA = "FETCH_USER_DATA";

export const fetchUserData = jobcoinAddress => {
  console.log("action", jobcoinAddress);
  return {
    type: FETCH_USER_DATA,
    payload: { currentUserJobcoinAddress: jobcoinAddress, otherstuff: "data" }
  };
};
