require('dotenv').config()
const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require("body-parser");
const fetch = require('node-fetch');
const cors = require("cors");

const app = express();
const User = require("./models/userData");


const userRoutes = require("./routes/userRoutes");

app.use(bodyParser.json())
app.use(cors());
app.use("/api",userRoutes);


//connecting to mongodb
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
    // useFindAndModify: false
}).then(()=>{
    console.log("DB CONNECTED");
}).catch((err)=>console.log(err))



//PORT
const PORT = process.env.PORT||8030;

//starting a server
app.listen(PORT,()=>{
    console.log(`app is running at ${PORT}`);
})