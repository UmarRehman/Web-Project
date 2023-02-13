import { ItemsInArray } from "./updown";
import { combineReducers } from "redux";
import { LoginAuth } from "./LoginAuth";
const rootReducer = combineReducers({
  ItemsInArray: ItemsInArray,
  LoginAuth: LoginAuth,
});
export default rootReducer;
