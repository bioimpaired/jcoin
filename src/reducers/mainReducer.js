import { FETCH_USER_DATA } from "../actions/mainActions";

const initialState = {
  currentUserJobcoinAddress: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      console.log("reducer", action);
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
