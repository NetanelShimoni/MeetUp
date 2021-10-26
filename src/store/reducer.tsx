import {EUsermode, IAction, Istore, IUser} from "./interfacses";
import * as Actions from "./actionsType"
import {useEffect} from "react";
import axios, {AxiosResponse} from "axios";
import {store} from "./store";
import {ADD_USER, UPDATE_MODE} from "./actionsType";

//
//  let result:any[] =[]
// // @ts-ignore
//     const res: AxiosResponse<Array<IUser>> =  axios.get('http://localhost:3001/all-user',);
//     result=res.data;
//     console.log("netnael ",res.data)

const initState ={
    users:[],
    userMode: EUsermode.none,
}

const reducer  = (state:Istore =initState , action:IAction) :Istore =>  {
    switch (action.type) {
        case ADD_USER:
            console.log("ADD USER !!!")
           return {...state, users: [...state.users, action.payload]} as Istore;
        case UPDATE_MODE:
            return {...state, userMode: action.payload} as Istore ;
        default:
            console.log("default!!")
            //console.log("store is :     ",store.getState())
            return state;
    }
}
export default reducer;