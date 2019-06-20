import { combineReducers } from "redux";
import exchange from "./exchange";
import clients from "./clients";

export default combineReducers({
    exchange,
    clients,
});
