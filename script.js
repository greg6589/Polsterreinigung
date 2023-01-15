const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
});

navbar.addEventListener("click", function () {
  burger.classList.remove("active");
});
