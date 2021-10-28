const dotenv = require('dotenv')

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

dotenv.config()

console.log(process.env.HELLO)

//connect to MongoDB
const dbURI =process.env.URL_MONGO
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result) => app.listen(3001) )
    .catch((err)=>
        console.log(err)
    )



app.get("/",function (req,res){
    res.send("Express here!!"+ process.env.HELLO)
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



    const user = new User ({
        fullName:req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        meetUps:req.body.meetUps,
        ownMeetUp:req.body.ownMeetUp
    });
    user.save()
        .then((result) => {
        res.send(res.status(200))
    } )
        .catch((err)=>{
            console.log(err)
        })
})

