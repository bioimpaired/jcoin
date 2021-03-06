import {
  FETCH_USER_DATA,
  SIGNOUT,
  SET_RESPONSE_MESSAGE
} from "../actions/mainActions";

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
    case SET_RESPONSE_MESSAGE:
      return {
        ...state,
        responseMessage: action.payload
      };
    default:
      return state;
  }
};
