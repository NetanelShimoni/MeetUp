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



 export interface Props {
    openPopup :any;
    SetopenPopup :any;
}

const Create : React.FC<Props> = (props: Props )  => {
    const history = useHistory();


    return(
        <Dialog open={props.openPopup}  maxWidth="xl" >
            <DialogTitle>
                <Typography gutterBottom variant="h3" style={{margin:"center"}}>
                    יצירת מייטאפ
                </Typography>


            </DialogTitle>
            <DialogContent >
                <Typography variant="body2" style={{display: "flex",justifyContent: "space-between",margin:"10px" ,padding:"15px"}}>

                    <TextField id="outlined-basic" label="שם יוצר המייטאפ" variant="outlined"  />
                    <TextField id="outlined-basic" label="כותרת" variant="outlined" />
                    <TextField id="outlined-basic" label="תיאור" variant="outlined" />
                    <TextField id="outlined-basic"  type="date" variant="outlined" />
                    <TextField id="outlined-basic"  type="time" variant="outlined" />

                </Typography>
                <br/>
                <RadioGroup style={{ margin:"20px" }} >
                    <FormControlLabel value="Zoom" control={<Radio />} label="Zoom" />
                    <FormControlLabel value="Frontally" control={<Radio />} label="Frontally"  />
                    <FormControlLabel value="Zoom & Frontally" control={<Radio />} label="Zoom & Frontally" onClick={ ()=>  <TextField   id="outlined-basic"  label="URL" variant="outlined"  />} />
                </RadioGroup>


                <Button type="submit"  endIcon={<Send/>} color="primary"  variant="contained" style={{display: "flex"}}> Post</Button>
                <Button   endIcon={<ExitToApp/>} onClick={()=> props.SetopenPopup(!props.openPopup)} variant="contained" color="primary"  style={{color:"white",fontWeight: "bold" ,
                    background:"red",position:"absolute", left: "900px" ,top:"40px"}}  > X</Button>

            </DialogContent >

        </Dialog>
    )

}
export default Create;

