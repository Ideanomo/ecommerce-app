export const validator = (values, fieldName) => {
  let errors = {};
  switch (fieldName) {
    case "email":
      validateEmail(values.email, errors);
      break;
    case "password":
      validatePassword(values.password, errors);
      break;
    default:
  }
  return errors;
};

const validateEmail = (email, errors) => {
  let result;

  if (!email) {
    errors.email = "Email is Required";
    result = false;
  } else {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
    result = regEx.test(String(email).toLowerCase());
    if (!result) errors.email = "Invalid Email address";
  }
  return result;
};

const validatePassword = (_password, errors) => {
  let result;

  if (!_password) {
    errors.password = "Password is Required";
    result = false;
  } else {
    let _case = /(?=.*[a-z])/;
    result = _case.test(_password);

    if (!result) {
      errors.password = "Password must contain at least one lower case letter.";
      result = false;
    } else if (_password.length < 10) {
      errors.password = "Password length must be more than 10 characters ";
      result = false;
    }
  }

  return result;
};
