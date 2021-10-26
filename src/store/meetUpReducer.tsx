import {IMeetUp, MEETUP_FAIL, MEETUP_LOADING, MEETUP_SUCCESS, MeetUpDispatchTypes} from "../actions/meetUpActionType";


const initStore :DefaultStateI = {

    loading:false
};


interface DefaultStateI {
    loading: boolean,
    meetups?:Array<IMeetUp>
}


export const MeetUpReducer = (state: DefaultStateI = initStore, action: MeetUpDispatchTypes) :DefaultStateI => {
    console.log("reducer", state);
    switch (action.type) {
        case MEETUP_FAIL:
            return {
                loading:false
            }
        case MEETUP_LOADING:
            return {
                loading:true
            }
        case MEETUP_SUCCESS:
            console.log("in user success")
            return {
                loading:false,
                meetups:action.payload
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