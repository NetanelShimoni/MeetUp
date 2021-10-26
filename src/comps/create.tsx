import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
import Home from "./home";
import {ExitToApp, Send} from "@material-ui/icons";
import {Alert, Typography} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import { IUser, IMeetUp} from "../store/interfacses";



 export interface Props {
    openPopup :any;
    SetopenPopup :any;
}

const Create : React.FC<Props> = (props: Props )  => {
    const history = useHistory();
    const allUsers = useSelector<Array<IUser>>((state:any) => state.users);
    const [meetUp,setMeetUp] = useState<IMeetUp>({ownerId:0,img:"",date:"",title:"",intend:"All",time:"",description:"",linkFeedback:""});



    const changeMeetUp = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        switch (e.target.id) {
            case "create-meetup":
                // @ts-ignore
                meetUp.ownerId=1;
                break;
            case "title":
                meetUp.title=e.target.value
                console.log(e.target.value)
                return;
            case "details":
                meetUp.description=e.target.value
                console.log(e.target.value)
                return;
            case "date":
                meetUp.date=e.target.value
                console.log(e.target.value)
                return;
            case "time":
                meetUp.time=e.target.value
                console.log(e.target.value)
                return;
            default:
                return;

        }
    }

    return(
        <Dialog open={props.openPopup}  maxWidth="xl" >
            <DialogTitle>
                <Typography gutterBottom variant="h3" style={{margin:"center"}}>
                    יצירת מייטאפ
                </Typography>


            </DialogTitle>
            <DialogContent >
                <Typography variant="body2" style={{display: "flex",justifyContent: "space-between",margin:"10px" ,padding:"15px"}}>

                    <TextField id="create-meetup" label="שם יוצר המייטאפ" variant="outlined"  onChange={(e)=>changeMeetUp(e)} />
                    <TextField id="title" label="כותרת" variant="outlined"  onChange={(e)=>changeMeetUp(e)} />
                    <TextField id="details" label="תיאור" variant="outlined"  onChange={(e)=>changeMeetUp(e)} />
                    <TextField id="date"  type="date" variant="outlined"  onChange={(e)=>changeMeetUp(e)} />
                    <TextField id="time"  type="time" variant="outlined"  onChange={(e)=>changeMeetUp(e)} />

                </Typography>
                <br/>
                <RadioGroup style={{ margin:"20px" }} >
                    <FormControlLabel value="Zoom" control={<Radio />} label="Zoom" />
                    <FormControlLabel value="Frontally" control={<Radio />} label="Frontally"  />
                    <FormControlLabel value="Zoom & Frontally" control={<Radio />} label="Zoom & Frontally" onClick={ ()=>  console.log("dddd")} />

                </RadioGroup>


                <Button type="submit"  endIcon={<Send/>} color="primary"  variant="contained" style={{display: "flex" ,left: "890px"}}
                        onClick={(e)=>console.log("post")} > Post</Button>
                <Button   endIcon={<ExitToApp/>} onClick={()=> props.SetopenPopup(!props.openPopup)} variant="contained" color="primary"  style={{color:"white",fontWeight: "bold" ,
                    background:"red",position:"absolute", left: "900px" ,top:"40px"}}> X</Button>

            </DialogContent >

        </Dialog>
    )

}
export default Create;

