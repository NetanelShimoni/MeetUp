//
// import  {Dispatch} from "redux"
//
// // export interface IUser {
// //     fullName: string;
// //     email: string;
// //     password: string;
// //     isAdmin: boolean;
// //     meetUps: Array<number>;
// //     ownMeetUp: Array<number>;
// // }
//
//
// export const GetUser = () => async (dispatch:Dispatch) => {
//     try{
//         dispatch({
//             type:"LOADING_USER"
//                  })
//     }catch(e){
//
//     }
// }


export const USER_LOADING = "USER_LOADING"
export const USER_FAIL = "USER_FAIL"
export const USER_SUCCESS = "USER_SUCCESS"
export const ADD_USER = "ADD_USER"


export interface IUser {
    fullName: string;
    email: string;
    password: string;
    isAdmin: boolean;
    meetUps: Array<number>;
    ownMeetUp: Array<number>;
}

export interface IUserLoading {
    type: typeof USER_LOADING,
}
export interface IUserFail {
    type: typeof USER_FAIL,
}
export interface IUserSuccess {
    type: typeof USER_SUCCESS,
    payload:Array<IUser>
}
export interface IUserAdd {
    type: typeof ADD_USER,
    payload: IUser
}

export type  UserDispatchTypes = IUserFail |IUserLoading | IUserSuccess | IUserAdd;