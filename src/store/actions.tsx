import { EUsermode, IUser } from "./interfacses";
import { ADD_USER, UPDATE_MODE } from "./actionsType";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import * as Actions from "./actionsType";

export const addUser = (newUser: IUser) => async (dispatch: Dispatch) => {
  try {
    const res = axios
      .post("http://localhost:3001/add-user", newUser)
      .then(function (result) {
      });
    dispatch({
      type: Actions.ADD_USER,
      payload: newUser,
    });

    if (newUser.isAdmin) {
      dispatch({ type: UPDATE_MODE, payload: EUsermode.admin });
    }
  } catch (e) {
    console.log("error", e);
  }
};
