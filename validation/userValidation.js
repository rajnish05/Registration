const Validator = require("validator");
const isEmpty = require("is-empty");

exports.userRegisterValidation = function (data) {
  data.name = !isEmpty(data.name) ? data.name : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  let errors = {}
  // Validating First Name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }
  else if (typeof data.name) {
    if (!(data.name.match(/^[a-zA-Z ]{2,30}$/))) {
      errors.name = "Invalid Name";
    }
  }
  else {
    errors.name = "Name can't be Array or Object"
  }
  
  // Validating contact Number

  // if (Validator.isEmpty(data.contact)) {
  //   errors.contact = "contact field is required";
  // }
  // else if (typeof data.contact == "string") {
  //   if (!(data.contact.match(/^(?=.*[0-9])[- +()0-9]{6,17}$/))) {
  //     errors["contact"] = "Provided contact Number is Invalid";
  //   }
  // }
  // else {
  //   errors.contact = "contact number cant be  object or Array";
  // }

  // validate Email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  else if (typeof data.email == "string") {
    if (!(data.email.match(/^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/))) {
      errors["email"] = "Provided Email is Invalid";
    }
  }
  else {
    errors.email = "Email cant be  object or Array";
  }
  // Validate Password
  if (Validator.isEmpty(data.password)) {
    errors.password = "contact field is required";
  }
  else if (typeof data.password == "string"){
    if(!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
    }
  }
  else {
    errors.password = "Password cant be  object or Array";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

// Login
exports.userLoginValidation = function (data) {
  data.email = !isEmpty(data.email) ? data.email : "",
    data.password = !isEmpty(data.password) ? data.password : "";
  let errors = {}

  // validate Email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  else if (typeof data.email == "string") {
    if (!(data.email.match(/^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/))) {
      errors["email"] = "Provided Email is Invalid";
    }
  }
  else {
    errors.email = "Email cant be  object or Array";
  }
  // Validate Password
  if (Validator.isEmpty(data.password)) {
    errors.password = "contact field is required";
  } else if (typeof data.password == "string"){
    if(!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
    }
  }
  else {
    errors.password = "Password cant be  object or Array";
  }




  return {
    errors,
    isValid: isEmpty(errors)
  };

}