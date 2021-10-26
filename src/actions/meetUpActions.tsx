import {Dispatch} from "redux"
import axios from "axios";
import {IMeetUp, MEETUP_FAIL, MEETUP_LOADING, MEETUP_SUCCESS, MeetUpDispatchTypes} from "./meetUpActionType";
import {useDispatch} from "react-redux";

//
// export const addUser  =  (payload: IUser) => {
//     //  const result: AxiosResponse<Array<IUser>> = await axios.get('http://localhost:3001/all-user',);
//     // if( result.data.map((user)=>payload.email!=user.email)){
//     //     console.log("it is good!")
//     return {
//         type: "ADD_USER",
//         payload
//     };
//     // }else{
//     //     console.log("same email")
//     // }
//
// };


export const AddMeetUp = (payload:IMeetUp) =>  {
    const dispatch = async (dispatch:Dispatch<MeetUpDispatchTypes>) => {
        console.log("relly!!!")
        try {
            dispatch({
                type: MEETUP_LOADING
            })

            // const res :AxiosResponse<Array<IMeetUp>> = await
            try {
                await axios({
                    method: 'post',
                    url: 'http://localhost:3001/all-user',
                    data: payload
                })
                console.log("heree!!!")
                // dispatch({
                //     type:MEETUP_SUCCESS,
                //     payload:[...payload,payload]
                // })
            } catch (e) {
                dispatch({
                    type: MEETUP_FAIL
                })
            }


        } catch (e) {
            dispatch({
                type: MEETUP_FAIL
            })

        }
    }

}
