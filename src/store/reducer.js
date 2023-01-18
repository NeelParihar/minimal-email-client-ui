import { combineReducers } from "redux";
import emailReducer from "./emailReducer";
import filterReducer from "./filterReducer";

const allReducers = combineReducers({
    emailReducer: emailReducer,
    filterReducer: filterReducer,
});

export default allReducers;