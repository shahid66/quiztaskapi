const express=require('express');
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const router = require('./router/api');



// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// DB Connection
mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("database connected"))
    .catch((err) => console.log("DB Error => ", err));


app.use(router)
   
   // server

   app.listen(process.env.PORT, () => {
    console.log(`The API is running... ${process.env.PORT}`)
   })