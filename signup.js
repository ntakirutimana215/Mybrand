// const Form = document.getElementById("myform");
// const Errors = document.getElementById("errorMessages");

// Form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputUsername = document.getElementById("name").value;
//   const inputUseremail = document.getElementById("email").value;
//   const inupUserpassword = document.getElementById("password").value;
//   const inputUserConfirmPassword =
//     document.getElementById("confirmpassword").value;

//   const existingUser = JSON.parse(localStorage.getItem("user")) || [];

//   const User = {
//     username: inputUsername,
//     useremail: inputUseremail,
//     password: inupUserpassword,
//     isAdmin: false,
//     isLoggedIn: true,
//   };
//   if (inupUserpassword === inputUserConfirmPassword) {
//     existingUser.push(User);
//     localStorage.setItem("user", JSON.stringify(existingUser));
//     const loginUser = existingUser.find(
//       (user) =>
//         user.username === User.username && user.password === User.password
//     );
//     localStorage.setItem("loginUser", JSON.stringify(loginUser));
//     window.location.href = "index.html";
//   } else {
//     Errors.innerHTML = "Password does not match";

//     Errors.style.color = "red";
//     setTimeout(() => {
//       Errors.innerHTML = "";
//     }, 3000);
//   }
// });

const Form = document.getElementById("myform");
const Errors = document.getElementById("errorMessages");

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputUsername = document.getElementById("name").value;
  const inputUseremail = document.getElementById("email").value;
  const inupUserpassword = document.getElementById("password").value;
  const inputUserConfirmPassword = document.getElementById("confirmpassword").value;
   

  const existingUser = JSON.parse(localStorage.getItem("user")) || [];

  const User = {
    username: inputUsername,
    useremail: inputUseremail,
    password: inupUserpassword,
    isAdmin: false,
    isLoggedIn: true,
  };

  // Check if email length is less than 8 characters
  

  // Validate email format using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputUseremail)) {
    Errors.innerHTML = "Please enter a valid email address";
    Errors.style.color = "red";
    return;
  }

  // Validate password strength
  if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/.test(inupUserpassword)) {
    Errors.innerHTML =
      "Please use a strong password containing characters, numbers, and symbols";
    Errors.style.color = "red";
    return;
  }

  if (inupUserpassword === inputUserConfirmPassword) {
    existingUser.push(User);
    localStorage.setItem("user", JSON.stringify(existingUser));
    const loginUser = existingUser.find(
      (user) =>
        user.username === User.username && user.password === User.password
    );
    localStorage.setItem("loginUser", JSON.stringify(loginUser));
    window.location.href = "index.html";
  } else {
    Errors.innerHTML = "Password does not match";
    Errors.style.color = "red";
    setTimeout(() => {
      Errors.innerHTML = "";
    }, 3000);
  }
});


