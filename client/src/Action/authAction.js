const axios = require('axios')
var baseUrl = "http://localhost:5001"

export const registerUser = (payload) =>dispatch => {
  return new Promise((resolve, reject) => {

    axios
      .post(baseUrl + "/api/v1/user/register", payload)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};


export const loginUser = (payload) => dispatch =>{
  return new Promise((resolve, reject) =>{
    axios
    .post(baseUrl+ "/api/v1/user/login",payload)
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    });
  })
}