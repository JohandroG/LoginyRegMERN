//*REQUIRES------------------------------------------------------------------------------------------
const express = require('express');
const {UserRouter} = require('./server/routes/usersRouter');
const path = require('path');
var cors = require('cors');

//*APP------------------------------------------------------------------------------------------
const app = express();
app.use(cors())
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );

//!app.use(express.static(path.join(__dirname, "/public/dist/public")))


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTION");
    next();
});

//*DATABASE------------------------------------------------------------------------------------------
require("./server/config/database.js");

//*ROUTES------------------------------------------------------------------------------------------
app.use( '/users', UserRouter );

//
// app.all('*', function (req,res) {
//     res.sendFile(path.resolve(".././public/dist/public/index.html"))
// })

//*ANGULAR------------------------------------------------------------------------------------------


//todo app.all('*', function (req,res) {
//     res.sendFile(path.resolve("./public/dist/public/index.html"))
// })

//*PORTS----------------------------------------------------------------------------------------

const port = process.env.PORT || 8080;

app.listen(8080, function(){
    console.log("The BackEnd server is working on port: 8080");
})
