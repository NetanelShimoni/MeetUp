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
import {Istore, IUser} from "./store/interfacses";
import {stat} from "fs";
import SignUp from "./comps/signUp";
import {Alert} from "@mui/material";

const App : React.FC = () => {
//console.log("stateSelctore",state.allUsers)
    const [openPopup , setOpenPopup] = useState(false);

    const dispatch = useDispatch();
    const onAddUser = (newUser:IUser) => {
        console.log("beforedispactj")
       // dispatch(addUser(newUser))
    }
    //  const addUser  =  (payload: IUser) => {
    //     //  const result: AxiosResponse<Array<IUser>> = await axios.get('http://localhost:3001/all-user',);
    //     // if( result.data.map((user)=>payload.email!=user.email)){
    //
    //     //const p = await axios.post('http://localhost:3001/add-user', {data:payload});
    //
    //    dispatch(addNewUser)
    //
    //
    // };


    return(
        <Router>
          <Switch >

              <Route path='/'  component={Home} exact >
                  <Navbar/>
                  <Home/>
                  {/*<Create openPopup={openPopup} SetopenPopup={openPopup}/>*/}
              </Route>
          <Route path='/signup' component={SignUp} exact >
              <SignUp />
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
