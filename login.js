
function validateForm() {
  const inputUseremail = document.forms["myForm"]["email"].value;
  const inputPassword = document.forms["myForm"]["password"].value;
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = existingUsers.find(
    (user) => user.useremail === inputUseremail && user.password === inputPassword);

  if (!matchedUser) {
    document.getElementById("errorMessages").innerHTML =
      "The email or password is incorrect";
    return false;
  } else {
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    if (matchedUser.isAdmin) {
      window.location.href = "admin.html";
    } else {
      window.location.href = "index.html";
    }
    return false;
  }
}
