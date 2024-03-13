function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;
  var confirmPassword = document.forms["myForm"]["confirmPassword"].value;

  var errorMessages = "";

  if (name == "") {
    errorMessages += "Name must be filled out<br>";
  }

  if (email == "") {
    errorMessages += "Email must be filled out<br>";
  } else {
    
  }

  if (password == "") {
    errorMessages += "Password must be filled out<br>";
  }

  if (confirmPassword == "") {
    errorMessages += "Confirm Password must be filled out<br>";
  }

  if (password != confirmPassword) {
    errorMessages += "Passwords do not match<br>";
  }

  if (errorMessages !== "") {
    document.getElementById("errorMessages").innerHTML = errorMessages;
    return false;
  }

  return true;
}
