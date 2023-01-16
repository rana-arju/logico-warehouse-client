import { combineReducers } from "redux";
import { loginReducer } from "./reducer/loginReducer";
import { registrationReducer } from "./reducer/registrationReducer";


const reducers = combineReducers({
    login: loginReducer,
    register: registrationReducer
  
});
export default reducers;
