const btnEL = document.querySelector(".header__mobile-nav");
const headerEL = document.querySelector(".header");

btnEL.addEventListener("click", function () {
  headerEL.classList.toggle("header-open");
});
