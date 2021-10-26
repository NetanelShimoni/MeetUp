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
// import {Dispatch} from "redux";
// export const AddMeetUp = () => async (dispatch:Dispatch) => {
//     try{
//         dispatch({
//             type:"LOADING_USER"
//                  })
//     }catch(e){
//
//     }
// }


export const MEETUP_LOADING = "MEETUP_LOADING"
export const MEETUP_FAIL = "MEETUP_FAIL"
export const MEETUP_SUCCESS = "MEETUP_SUCCESS"

export interface IMeetUp {
    title: string;
    description: string;
    date: string;
    time: string;
    img?: string;
    location?: Tlocation;
    ownerId: number;
    linkFeedback: string;
    intend: "Dev" | "All" | "Product";
}
type Tlocation = {
    zoom?: string;
    location?: string;
};



export interface IMeetUpLoading {
    type: typeof MEETUP_LOADING,
}
export interface IMeetUpFail {
    type: typeof MEETUP_FAIL,
}
export interface IMeetUpSuccess {
    type: typeof MEETUP_SUCCESS,
    payload:Array<IMeetUp>
}

export type  MeetUpDispatchTypes = IMeetUpFail |IMeetUpLoading | IMeetUpSuccess;