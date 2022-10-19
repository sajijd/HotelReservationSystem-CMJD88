const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors')
/*----*/
const GuestReservationController=require('./route/GuestReservationRoute');
const UserRoute=require('./route/UserRoute');

/*----*/


const app=express();
app.use(express.json({limit:'50mb'}));
app.use(cors())
const serverPort=process.env.SERVER_PORT;
mongoose.connect(
    "mongodb://localhost:27017/hrs",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useFindAndModify:false,
        // useCreateIndex:true
    }
).then(()=>{
    app.listen(serverPort, ()=>{
        console.log(`API Service is Up And Running on ${serverPort}`)
    })
}).catch(error => {
    console.log(error);
});

function GuestReservationRoute() {

}

app.use('/api/v1/GuestReservationRoute',GuestReservationRoute);
app.use('/api/v1/userRoute',UserRoute);
