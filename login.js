function validateForm() {
  const inputUseremail = document.forms["myForm"]["email"].value;
  const inputPassword = document.forms["myForm"]["password"].value;
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = existingUsers.find(
    (user) =>
      user.useremail === inputUseremail && user.password === inputPassword
  );

  if (!matchedUser) {
    document.getElementById("errorMessages").innerHTML =
      "The email or password is incorrect";
    return false;
  } else {
    // Successful login
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    if (matchedUser.isAdmin) {
      // Redirect to admin panel
      window.location.href = "admin_panel.html";
    } else {
      // Redirect to user dashboard or home page
      window.location.href = "user_dashboard.html";
    }
    return false; // Prevent form submission
  }
}
