import './App.css';
import React, {Component, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ToDay from "./comps/toDay";
import About from "./comps/about";
import LastMeetUp from "./comps/lastMeetUp";
import Navbar from "./Navbar/navbar";
import Home from "./comps/home";
import Login from "./comps/signUp";
import Create from "./comps/create";
import {connect, useDispatch, useSelector} from "react-redux";
import {Istore} from "./store/interfacses";
import {stat} from "fs";
import IUser from "./interfaces/IUser";
import SignUp from "./comps/signUp";
import {Alert} from "@mui/material";
import {addUser} from "./store/actions";
import IUsers from "./interfaces/IUsers";

const App : React.FC = () => {
//console.log("stateSelctore",state.allUsers)
    const allUser  = useSelector<IUsers,IUsers["allUsers"]>((state) =>state.allUsers )
    const [openPopup , setOpenPopup] = useState(false);

    const dispatch = useDispatch();
    const onAddUser = (newUser:IUser) => {
        console.log("beforedispactj")
        dispatch(addUser(newUser))
    }



    return(
        <Router>
          <Switch >

              <Route path='/'  component={Home} exact >
                  <Navbar/>
                  <Home/>
                  {/*<Create openPopup={openPopup} SetopenPopup={openPopup}/>*/}
              </Route>
          <Route path='/signup' component={SignUp} exact >
              <SignUp addUser={addUser} />
              {/*<ul>*/}
              {/*    {allUser.map((user:IUser) => {*/}
              {/*        console.log(user.email)*/}
              {/*       return <li >{user.fullName}</li>*/}
              {/*        // alert(user.fullName)*/}
              {/*    })}*/}
              {/*</ul>*/}
          </Route>



            



            <Route path='/lastmeetup' component={LastMeetUp} exact >
                <Navbar/>
                <LastMeetUp/>
            </Route>


            <Route path='/about' component={About} exact >
                {/*<Navbar/>*/}
                <Navbar/>
                <About/>
            </Route>
          </Switch>
        </Router>

  );
};


export default App;
