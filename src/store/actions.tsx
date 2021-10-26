import {IUser} from "./interfacses";
import {ADD_USER} from "./actionsType";
import axios, {AxiosResponse} from "axios";
import {store} from "./store";
import {Dispatch} from "redux";
import * as Actions from "./actionsType"



export const addUser=(newUser: IUser)=> async (dispatch:Dispatch) => {
    console.log("newUser is:",newUser)
    try {

        await axios.post('http://localhost:3001/add-user', newUser)
        console.log("after axsioss!!")
        dispatch(
            {
                type: ADD_USER,
                payload: newUser
            })
    }catch (e) {
        console.log("erooree",e)
    }
}