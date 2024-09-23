import { combineReducers, createStore } from "redux";
import accountReducer from "../Features/Account/AccountSlice";
import customerReducer from "../Features/Customer/CustomerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);


