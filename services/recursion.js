const fs = require('fs');
const path = require('path');


function listFoldersAndFiles( dir ){
    return new Promise((resolve,reject)=>{

        const files = fs.readdirSync( dir );
        for( let f of files ){
            const new_path =  path.join( dir , f )
           if( fs.lstatSync(new_path ).isDirectory() === true ){
               listFoldersAndFiles( new_path ); // function calling function again i,e recursive function
           }else {
               resolve(f)
           }
        }
    })
  
}

module.exports=listFoldersAndFiles;
// const xpath = '../Users/ashin/Downloads';
// listFoldersAndFiles( xpath );
