import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import { makeStyles, Paper, TextField } from "@material-ui/core";
import { Typography } from "@mui/material";
import { purple } from "@material-ui/core/colors";
import shadows from "@material-ui/core/styles/shadows";
import { useDispatch, useSelector } from "react-redux";
import axios, {AxiosResponse} from "axios";
import {EUsermode, IUser} from "../store/interfacses";
import {store} from "../store/store";
import {ADD_USER, UPDATE_MODE} from "../store/actionsType";
import {addUser} from "../store/actions";

const useStyles = makeStyles({
  mainContainer: {
    // display:"flex",
    // justifyContent:"space-between",
    // alignItems: "center",
    //  height: "100%",
    //  flexDirection: "column",
  },
  warp: {
    color: "black",
    display: "grid",
    fontSize: "25px",
    placeItems: "center",
    padding: "250px",
    width: "100%",
    height: "500px",
  },
  imgWrapper: {
    height: "200px",
  },
  img: {
    width: "400px",
    height: "350x",
  },
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    margin: "180px",
  },
});

// export interface NewUserInputProps {
//   addUser(user: IUser): void;
// }
const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const classes = useStyles();
  const allUser = useSelector<Array<IUser>>(
    (state) => state
  );
  const [user, setUser] = useState<IUser>({
    email: "",
    isAdmin: false,
    password: "",
    fullName: "",
    meetUps: [],
    ownMeetUp: [],
  });
  const [enteredTextUserName, setenteredTextUserName] = useState("");
  const [enteredTextEmail, setenteredTextEmail] = useState("");
  const [enteredTextPassword, setenteredTextPassword] = useState("");
  const [isAdmin, setISAdmin] = useState(false);

  const   onAddUserClick =    (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("user is: ", user);
    // dispatch({type:"ADD_USER",payload:{fullName:"shahar",email:"shahar@webiks.com",password:"123445",admin:true}})
       dispatch(addUser(user));
    //store.dispatch({type:ADD_USER,payload:user})
   // dispatch(await addUser(user))
    console.log(store.getState())

    if (isAdmin) {
      store.dispatch({type: UPDATE_MODE, payload: EUsermode.admin})
      console.log(store.getState())
    }
    setenteredTextPassword("");
    setenteredTextUserName("");
    setenteredTextEmail("");
    setISAdmin(false);
    setUser({
      email: "",
      isAdmin: false,
      password: "",
      fullName: "",
      meetUps: [],
      ownMeetUp: [],
    });
  };
  // @ts-ignore
  useEffect(async () => {
       const result: AxiosResponse<Array<IUser>> = await axios.get('http://localhost:3001/all-user',);
    console.log("netnael ",result.data)
  },[]);

  const updateUserDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "fullName":
        user.fullName = event.target.value;
        setenteredTextUserName(event.target.value);
        setUser(user);
        break;
      case "email":
        user.email = event.target.value;
        setenteredTextEmail(event.target.value);
        setUser(user);
        break;
      case "password":
        user.password = event.target.value;
        setenteredTextPassword(event.target.value);
        setUser(user);
        break;
      case "admin":
        // if(event.target.checked)
        user.isAdmin = !user.isAdmin;
        setISAdmin(user.isAdmin);
        setUser(user);
        break;
    }
  };

  return (

    <form className={classes.warp}>
      <fieldset>
        <fieldset>
          <label htmlFor="fullName">שם מלא:</label>
          <input
            type="text"
            value={enteredTextUserName}
            onChange={(e) => updateUserDetails(e)}
            id="fullName"
          />
        </fieldset>
        <label htmlFor="email">מייל:</label>
        <input
          type="text"
          value={enteredTextEmail}
          onChange={(e) => updateUserDetails(e)}
          id="email"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">סיסמא:</label>
        <input
          type="password"
          value={enteredTextPassword}
          onChange={(e) => updateUserDetails(e)}
          id="password"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="admin">מנהל?</label>
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={(e) => updateUserDetails(e)}
          id="admin"
        />
      </fieldset>
      <button type="submit" onClick={(e) => onAddUserClick(e)}>

        הירשם
      </button>

    </form>
  );
};
export default SignUp;
