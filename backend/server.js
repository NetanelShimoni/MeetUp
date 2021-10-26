const express = require("express");
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
    console.log("dddddddd")
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
    res.status(200)

    const user = new User ({
        fullName:"aaa",
        email: "aaaaa",
        password: "aaaaa",
        isAdmin: false,
        meetUps:[],
        ownMeetUp:[]
    });

    // const user = new User ({
    //     fullName:req.body.fullName,
    //     email: req.body.email,
    //     password: req.body.password,
    //     isAdmin: req.body.isAdmin,
    //     meetUps:req.body.meetUps,
    //     ownMeetUp:req.body.ownMeetUp
    // });
    user.save()
        .then((result) => {
        res.send(res.status(200))
    } )
        .catch((err)=>{
            console.log(err)
        })
})

// , function (){
//     console.log("working!")
// })
