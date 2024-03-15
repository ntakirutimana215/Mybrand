const currentYear = new Date().getFullYear();
document.getElementById("year").innerText = currentYear;

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const closeBtn = document.getElementById("closeBtn");
  const closeLink = document.getElementById("link");
  const sidenavLinks = document.querySelector(".sidenav-links");
  const Logout = document.getElementById("logout");

  toggleBtn.addEventListener("click", function () {
    sidenavLinks.classList.toggle("active");
    toggleBtn.style.display = "none";
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    sidenavLinks.classList.remove("active");
    toggleBtn.style.display = "block";
    closeBtn.style.display = "none";
  });

  closeLink.addEventListener("click", function () {
    sidenavLinks.classList.remove("active");
    toggleBtn.style.display = "block";
    closeBtn.style.display = "none";
  });

  function logout() {
    const LoginUser = JSON.parse(localStorage.getItem("loginUser"));
    console.log(LoginUser);
    if (LoginUser) {
      Logout.innerHTML = `<a href="#">Logout</a>`;
    } else {
      Logout.innerHTML = "";
    }
  }
  logout();

  document.addEventListener("click", (e) => {
    if (e.target.id === "logout") {
      e.preventDefault();
      localStorage.removeItem("loginUser");
      window.location.href = "signup.html";
      logout();
    }
  });
});
