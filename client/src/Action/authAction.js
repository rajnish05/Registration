const axios = require('axios')

// This Module is used for user Registration
export const registerUser = (payload) =>dispatch => {
  return new Promise((resolve, reject) => {

    axios
      .post("/api/v1/user/register", payload)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};


// This Module is used for user Login
export const loginUser = (payload) => dispatch =>{
  return new Promise((resolve, reject) =>{
    axios
    .post("/api/v1/user/login",payload)
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    });
  })
}