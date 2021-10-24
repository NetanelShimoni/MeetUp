import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Paper, TextField } from "@material-ui/core";
import { Typography } from "@mui/material";
import { purple } from "@material-ui/core/colors";
import shadows from "@material-ui/core/styles/shadows";
import IUser from "../interfaces/IUser";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/actions";
import IUsers from "../interfaces/IUsers";

const useStyles = makeStyles({
  mainContainer: {
    // display:"flex",
    // justifyContent:"space-between",
    // alignItems: "center",
    //  height: "100%",
    //  flexDirection: "column",
  },
  warp: {
    color: "white",
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

export interface NewUserInputProps {
  addUser(user: IUser): void;
}
const SignUp: React.FC<NewUserInputProps> = ({ addUser }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const classes = useStyles();
  const allUser = useSelector<IUsers, IUsers["allUsers"]>(
    (state) => state.allUsers
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

  const onAddUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    console.log("user is: ", user);
    // dispatch({type:"ADD_USER",payload:{fullName:"shahar",email:"shahar@webiks.com",password:"123445",admin:true}})
    dispatch(addUser(user));
    console.log("Allusers is: ", allUser);
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
          <label htmlFor="fullName">FullName:</label>
          <input
            type="text"
            value={enteredTextUserName}
            onChange={(e) => updateUserDetails(e)}
            id="fullName"
          />
        </fieldset>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={enteredTextEmail}
          onChange={(e) => updateUserDetails(e)}
          id="email"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={enteredTextPassword}
          onChange={(e) => updateUserDetails(e)}
          id="password"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="admin">Admin:</label>
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={(e) => updateUserDetails(e)}
          id="admin"
        />
      </fieldset>
      <button type="submit" onClick={(e) => onAddUserClick(e)}>
        {" "}
        Sign up
      </button>
    </form>
  );
};
export default SignUp;
