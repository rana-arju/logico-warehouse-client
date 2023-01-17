export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";
export const LOGOUT = "LOGOUT";

const initialState = {
  isLoading: false,
  user: [],
  error: null,
  isLoggedIn : false
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
        return authLogin(state, action);
    //   return {
    //     ...state,
    //     isLoading: false,
    //     user: action.payload.data,
    //     isLoggedIn: true,
    //   };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload,
        isLoggedIn: false,
      };
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLLoading: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLLoading: false,
        user: action.payload.data,
        isLoggedIn: false,
      };
    case REGISTRATION_FAILED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload,
        isLoggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
function authLogin(state, action) {
  const { user } = action;
  console.log("fun", user);
  return {
    ...state,
    isLoading: false,

    user,
  };
}
