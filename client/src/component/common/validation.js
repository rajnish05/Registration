const _ = require("underscore");
const Validator = require("validator");
const isEmpty = require("is-empty");
export const registerValidation = (data) =>{
    return new Promise((resolve,reject) =>{
        let errors = {};
        let formIsValid = true;

        // First Name
        if(data.fName.length == 0){
            formIsValid = false
            errors["fName"] = "First Name is Required !";
            reject(errors)
        } 
        if(data.fName.length>0){
            if(!(data.fName.match(/^[a-zA-Z ]{2,30}$/))){
                errors["fName"] = "Provided Name is Invalid";
                reject(errors)
            }
        }
        // Last Name
        if(data.lName.length == 0){
            formIsValid = false
            errors["lName"] = "last Name is Required !";
            reject(errors)
        } 
        if(data.lName.length>0){
            if(!(data.lName.match(/^[a-zA-Z ]{2,30}$/))){
                errors["fName"] = "Provided Name is Invalid";
                reject(errors)
            }
        }
         //Contact number
      if (data.contact.length == 0) {
        formIsValid = false;
        errors["contact"] = "contact Number is required";
        reject(errors)
     }
     if (data.contact.length > 0) {
        if (!(data.contact.match(/^(?=.*[0-9])[- +()0-9]{6,17}$/))) {
           formIsValid = false;
           errors["contact"] = "Provided contact Number is Invalid";
           reject(errors)
        }
     }
        //Validate Email
        if (Validator.isEmpty(data.email)) {
            formIsValid = false;
            errors["email"] = "Email is required";
            reject(errors)
         } else if (!Validator.isEmail(data.email)) {
            errors.email = "Email is invalid";
          } 
        
         // Validate Password
         if (Validator.isEmpty(data.password)) {
           formIsValid = false;
           errors["password"] = "Password is required";
           reject(errors)
        }else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
            errors.password = "Password must be at least 6 characters";
          }
     resolve(formIsValid)
    })
}