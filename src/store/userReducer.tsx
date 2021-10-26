import {ADD_USER, IUser, USER_FAIL, USER_LOADING, USER_SUCCESS, UserDispatchTypes} from "../actions/userActionType";
import {IMeetUp} from "../actions/meetUpActionType";

export type Action = TMeetup | TUser |TUserid;
// Smeetup |
// Suser |
// Smode;

type TMeetup = { type:"ADD_MEETUP",payload: IMeetUp}
type TUser = { type:"ADD_USER",payload: IUser}
type TUserid = { type:"DELETE_USER",payload: number}


const initStore :DefaultStateI = {

// users:  axios.get('http://localhost:3001/all-user').then(value => ),
//   userMode:EUsermode.none,
//  const result= AxiosResponse<Array<IUser>> = await axios.get('http://localhost:3001/all-user');

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
  // users: [
  //   {
  //     fullName: "Yossi",
  //     email: "yossi@webiks.com",
  //     password: "123",
  //     isAdmin: false,
  //     meetUps: [],
  //     ownMeetUp: [],
  //   },
  //   {
  //     fullName: "Netanel Shimoni",
  //     email: "netanel@webiks.com",
  //     password: "123",
  //     isAdmin: true,
  //     meetUps: [],
  //     ownMeetUp: [],
  //   },
  // ],
  // userMode:EUsermode.none,
  loading:false
};


interface DefaultStateI {
  loading: boolean,
  user?: IUser,
  users?:Array<IUser>
}
export const UserReducer = (state: DefaultStateI = initStore, action: UserDispatchTypes) :DefaultStateI => {
  console.log("reducer", state);
  switch (action.type) {
    case USER_FAIL:
      return {
        loading:false
      }
    case USER_LOADING:
      return {
        loading:true
      }
    case USER_SUCCESS:
      console.log("in user success")
      return {
        loading:false,
        users:action.payload
      }
    case ADD_USER:
      console.log("in user add")
      return {
        loading:false,
        user:action.payload
      }
    default:
      return state;


      // return { ...state, users: [...state., action.payload[0]] };
    // case "ADD_MEETUP":
    //     return {...state, meetups:[...state.meetups, action.payload]}
    // case "CHANGE_MODE":
    //     return state.userMode= action.payload;
    // case "DELETE_USER":
    //   console.log("DELETE USER")
    //       break;
    // case "ADD_MEETUP":
    //   console.log("ADD MEETUP")
    //       break;

  }
};
