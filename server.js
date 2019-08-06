// require('./db/db');  
const bodyparsers=require('body-parser');
const routeManager=require('./routes');
var cors = require('cors')
const path = require("path");

// const mongoose=require('mongoose');
const express=require('express');
const PORT=3003
const app=express();
require('dotenv').config({path:'variables.env'})
app.use(bodyparsers.urlencoded({
    extended:true
}));

app.use(bodyparsers.json({}));
app.use(cors())

app.use('/api/',routeManager);





module.exports=app.listen(process.env.PORT, function () {
    console.log("Server is running at port:" + process.env.PORT);
  });
  

  // const fs = require('fs');
  // const path = require('path');
  
  
  // function listFoldersAndFiles( dir ){
  //     const files = fs.readdirSync( dir );
  //     for( let f of files ){
  //         const new_path =  path.join( dir , f )
  //        if( fs.lstatSync(new_path ).isDirectory() === true ){
  //            listFoldersAndFiles( new_path ); // function calling function again i,e recursive function
  //        }else {
  //            console.log('files and folders',f)
  //        }
  //     }
  // }
  
  // const xpath = '../Users/ashin/Downloads';
  // listFoldersAndFiles( xpath );
