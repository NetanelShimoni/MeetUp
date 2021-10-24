import {createStore} from "redux";
import IMeetUp from "../interfaces/IMeetUp";
import IUser from "../interfaces/IUser";
import {EUsermode, Istore, jsonFormat} from "./interfacses";
import {UserReducer} from "./userReducer";

export const store = createStore(UserReducer)