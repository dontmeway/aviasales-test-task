import { combineReducers } from "redux";
import { getTicketsReducer } from "./getTickets";



export const rootReducer = combineReducers({
    tickets: getTicketsReducer
})