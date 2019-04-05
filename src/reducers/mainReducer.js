import { FETCH_USER_DATA, SIGNOUT } from "../actions/mainActions";

const initialState = {
  currentUserJobcoinAddress: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...action.payload
      };
    case SIGNOUT:
      return {
        currentUserJobcoinAddress: action.payload
      };
    default:
      return state;
  }
};
