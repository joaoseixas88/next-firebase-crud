import { combineReducers } from "redux";
import clients from "./clients/reducer";

const rootReducer = combineReducers({
  clients,
});

export { rootReducer };
