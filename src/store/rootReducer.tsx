import {combineReducers} from "redux";
import {UserReducer} from "./userReducer";
import {MeetUpReducer} from "./meetUpReducer";

export const rootReducer = combineReducers({
    userMain:UserReducer,
    meetUpMain:MeetUpReducer
})