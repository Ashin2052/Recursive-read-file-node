const url = "http://124.41.240.154:9803/api/nowshowinginfo";
const axios = require("axios");

class movieApi {
  constructor() {}
  getMovieList() {
    return new Promise((resolve, reject) => {
      axios(url, {
        method: "GET"
      })
        .then(d => {
          resolve(d.data);
        })
        .catch(e => reject(e));
    });
  }
}

module.exports = new movieApi();