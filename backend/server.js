const express = require("express");
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user')
const cors = require('cors')
app.use(cors({
    origin:"http://localhost:3000"
}))


//connect to MongoDB
const dbURI ='mongodb+srv://netanelsh0:netanelsh0@cluster0.w5ult.mongodb.net/usersDB?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result) => app.listen(3001) )
    .catch((err)=>
        console.log(err)
    )




app.get("/",function (reqq,res){
    res.send("Express here!!")
})

app.get('/all-user' ,(req,res)=> {
    User.find()
        .then((result)=> {
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
            }
        )
})

app.post('/add-user',(req,res) => {
    console.log(req.body,"netanel");

    res.status(200)
    // const user = new User ({
    //     fullName:'shimoni shimoni',
    //     email: 'shimoni_shimoni@webiks.com',
    //     password: '1234444',
    //     isAdmin: false,
    //     meetUps:[],
    //     ownMeetUp:[]
    // });
    // user.save()
    //     .then((result) => {
    //     res.send(result)
    // } )
    //     .catch((err)=>{
    //         console.log(err)
    //     })
})

// , function (){
//     console.log("working!")
// })
