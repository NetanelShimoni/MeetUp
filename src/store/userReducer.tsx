import { EUsermode, Istore, Smode, Suser } from "./interfacses";
import IUser from "../interfaces/IUser";
import IUsers from "../interfaces/IUsers";

export type Action = { type: "ADD_USER"; payload: IUser };
// Smeetup |
// Suser |
// Smode;

const initStore = {
  // let meetups : IMeetUp[] = [];
  // let users : Array<IUser> = [];
  //  fetch('http://localhost:8000/users')
  //     .then(res => res.json())
  //     .then((data :Array<IUser>) => {
  //         users=data
  //         console.log("fetch",users)
  //         // meetups = data.allmeetup;
  //     })
  // return {
  //     users,
  //     // meetups,
  //     userMode : EUsermode.none
  // }
  allUsers: [
    {
      fullName: "Yossi",
      email: "yossi@webiks.com",
      password: "123",
      isAdmin: false,
      meetUps: [],
      ownMeetUp: [],
    },
    {
      fullName: "Netanel Shimoni",
      email: "netanel@webiks.com",
      password: "123",
      isAdmin: true,
      meetUps: [],
      ownMeetUp: [],
    },
  ],
};
export const UserReducer = (state: IUsers = initStore, action: Action) => {
  console.log("reducer", state);
  switch (action.type) {
    case "ADD_USER":
      return { ...state, allUsers: [...state.allUsers, action.payload] };
    // case "ADD_MEETUP":
    //     return {...state, meetups:[...state.meetups, action.payload]}
    // case "CHANGE_MODE":
    //     return state.userMode= action.payload;
    default:
      return state;
  }
};
