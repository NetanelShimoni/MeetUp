// import {useDispatch} from "react-redux";
// import {Istore} from "../store/interfacses";
// import React from "react";
// import {NewUserInputProps} from "../comps/signUp";
// import {Action} from "../store/userReducer";
// import IMeetUp from "../interfaces/IMeetUp";
// import axios, {AxiosResponse} from "axios";
//

import {Action, Dispatch} from "redux"
import {IUser, USER_FAIL, USER_LOADING, USER_SUCCESS, UserDispatchTypes} from "./userActionType"
import axios, {AxiosResponse} from "axios";
import {useDispatch} from "react-redux";


 export const addNewUser  = (payload :IUser):Action  =>({
        type:"ADD_MEETUP" , payload
    }
)


//
//
// // export interface TIUser {
// //     fullName: string;
// //     email: string;
// //     password: string;
// //     isAdmin: boolean;
// //     meetUps: Array<number>;
// //     ownMeetUp: Array<number>;
// // }
//
//

// //const dispatch = useDispatch();
//
//
// // export const addMeetUp  = (newMeetUp :IMeetUp) :React.Dispatch<any> => {
// //     return (dispatch)=>{
// //
// //
// //         console.log("dddd")
// //     }
// // }
//
//
// // export const addMeetUp  = (newMeetUp :IMeetUp) :Action  =>({
// //         type:"ADD_MEETUP" , payload:newMeetUp
// //     }
// // )
// // export const deleteMeetUp  = (id :number) :Action  =>({
// //         type:"DELETE_USER" ,payload:id
// //     }
// // )





// export interface IUser {
//     fullName: string;
//     email: string;
//     password: string;
//     isAdmin: boolean;
//     meetUps: Array<number>;
//     ownMeetUp: Array<number>;
// }


export const GetUser = () => async (dispatch:Dispatch<UserDispatchTypes>) => {
    try{
        dispatch({
            type:USER_LOADING
        })

        const res :AxiosResponse<Array<IUser>> = await  axios.get("http://localhost:3001/all-user")
        dispatch({
            type:USER_SUCCESS,
            payload:res.data
        })

    }catch(e){
        dispatch({
            type:USER_FAIL
        })

    }
}
