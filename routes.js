const Router=require('express').Router;
let router=Router();
const recu=require('./services/recursion');
const movieApi=require('./services/movie_Api');
const filesFind=require('./services/recursion_File_List')
var cors = require('cors')
 

router.get('/',cors(),(req,res)=>{
  console.log("api hit")
    movieApi
    .getMovieList()
    .then(d => res.status(200).json(d))
    .catch(e => next(e));
  })
  
  router.put('/Files',cors(),(req,res)=>{
    // path='../Users/ashin/Downloads'
    console.log(req.body.xpath ,"path bosy")
    filesFind.listFoldersAndFiles(req.body.xpath)
    .then(d => res.status(200).json(d))
    .catch(e => res.json(e));
  })
  router.put('/Filed',cors(),(req,res)=>{
    // path='../Users/ashin/Downloads'
    console.log(req.body.xpath ,"path bosy")
    filesFind.listFoldersAndFiles(req.body.xpath)
    .then(d => res.status(200).json(d))
    .catch(e => res.json(e));
  })
  


module.exports=router;
