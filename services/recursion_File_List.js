var recursive = require("recursive-readdir");
var readdir = require("recursive-readdir");
class filesFind {
  constructor() {}

  listFoldersAndFiles(path) {
    return new Promise((resolve, reject) => {
        console.log(path,"path")
      readdir(path)
        .then(files => {
          resolve(files);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
}

module.exports = new filesFind();
