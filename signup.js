const Form = document.getElementById("myform");
const Errors = document.getElementById("errorMessages");

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputUsername = document.getElementById("name").value;
  const inputUseremail = document.getElementById("email").value;
  const inupUserpassword = document.getElementById("password").value;
  const inputUserConfirmPassword =
    document.getElementById("confirmpassword").value;

  // validating all inputs

  if (
    inputUsername === "" ||
    inputUseremail === "" ||
    inupUserpassword === ""
  ) {
    Errors.innerHTML = "Please fill all the required fields";
    Errors.style.color = "red";
    setTimeout(() => {
      Errors.innerHTML = "";
    }, 3000);
    return;
  }

  // validating email address

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(inputUseremail)) {
    Errors.innerHTML = "Email format is wrong";
    Errors.style.color = "red";
    setTimeout(() => {
      Errors.innerHTML = "";
    }, 3000);
    return;
  }

  // Validate password strength
  if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/.test(inupUserpassword)) {
    Errors.innerHTML =
      "Please use a strong password containing characters, numbers, and symbols";
    Errors.style.color = "red";
    return;
  }
  if (inupUserpassword !== inputUserConfirmPassword) {
    Errors.innerHTML = "Password does not match";
    Errors.style.color = "red";
    setTimeout(() => {
      Errors.innerHTML = "";
    }, 3000);
    return;
  }

  var users = JSON.parse(localStorage.getItem("users")) || {};
  for (var userId in users) {
    if (users.hasOwnProperty(userId)) {
      var user = users[userId];
      if (user.email === inputUseremail) {
        Errors.innerHTML = "The user with that email already exists";
        Errors.style.color = "red";
        setTimeout(() => {
          Errors.innerHTML = "";
        }, 3000);
        return;
      }
      else{
         window.location.href = "login.html";
      }
    
    }
  }

  var users = JSON.parse(localStorage.getItem("users")) || {};
  var userId = Object.keys(users).length + 1;

  var user = {
    id: userId,
    names: inputUsername,
    email: inputUseremail,
    password: inupUserpassword,
  };

  users[userId] = user;
  localStorage.setItem("users", JSON.stringify(users));
});
