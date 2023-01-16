export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

const initialState = {
  isLoading: false,
  user: {},
  error: null,
};
export const loginReducer = (state = initialState, action) => {
switch (action.type) {
  case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
  case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };  
      case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        user: {},
        error: action.payload
      };

  default:
    return state;
}
}