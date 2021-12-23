window.addEventListener("load", function () {
  const navbarBtn = document.querySelector(".navbar .navbar-toggle");
  navbarBtn.addEventListener("click", function () {
    navbarBtn.parentElement.classList.toggle("active");
  });
});
