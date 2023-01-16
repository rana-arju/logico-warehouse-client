export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";

const initialState = {
  isLoading: false,
  user: {},
  error: null,
};
export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLLoading: false,
        user: action.payload,
      };  
       case REGISTRATION_FAILED:
      return {
        ...state,
        isLoading: false,
        user: "",
        error: action.payload
      };

    default:
      return state;
  }
};
