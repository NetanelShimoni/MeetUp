import {EUsermode, IUser} from "./interfacses";
import {ADD_USER, UPDATE_MODE} from "./actionsType";
import axios, {AxiosResponse} from "axios";
import {store} from "./store";
import {Dispatch} from "redux";
import * as Actions from "./actionsType"



export const addUser=(newUser: IUser)=> async (dispatch:Dispatch) => {
    console.log("newUser is:",newUser)
    try {
      const res=   axios.post('http://localhost:3001/add-user', newUser).then( function (result) {
          console.log(result.status)


      })
        dispatch(
            {
                type: Actions.ADD_USER,
                payload: newUser
            })
        console.log("ADD USER OR!!!!!",store.getState())

        if (newUser.isAdmin) {
            dispatch({type: UPDATE_MODE, payload: EUsermode.admin})
            console.log("user is admin!!!",store.getState())
        }
    }catch (e) {
        console.log("erooree",e)
    }
}