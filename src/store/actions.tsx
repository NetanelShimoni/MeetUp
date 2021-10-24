import {useDispatch} from "react-redux";
import IUser from "../interfaces/IUser";
import {Istore} from "./interfacses";
import React from "react";
import {NewUserInputProps} from "../comps/signUp";
import {Action} from "./userReducer";


 export const addUser  = (newUser :IUser) :Action  =>({
         // const dispatch = useDispatch();
         // dispatch({type:"ADD_USER", payload:newUser}
         // )
         type:"ADD_USER" , payload:newUser
     }

 )
