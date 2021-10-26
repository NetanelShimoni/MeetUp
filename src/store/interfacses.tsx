import { IUser } from "../actions/userActionType";
import {IMeetUp} from "../actions/meetUpActionType";

export enum EUsermode{
    admin = "admin",
    regular = "regular",
    none = "none",
}

export interface Istore{
     // meetups : Array<IMeetUp>,
    users : Array<IUser>,
    userMode: EUsermode,
}


export interface jsonFormat {
    // allmeetup: Array<IMeetUp>,
    users: Array<IUser>,
}


export interface Smeetup {
    type: "ADD_MEETUP",
    payload:IMeetUp,
}
export interface Suser {
    type: "ADD_USER",
    payload:IUser,
}
export interface Smode {
    type: "CHANGE_MODE",
    payload:EUsermode,
}


const store : Istore = { users : [], userMode : EUsermode.none}
