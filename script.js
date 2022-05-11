//jshint esversion:6

document.querySelectorAll(".arrow-up")[0].addEventListener("click",() => {
  document.querySelectorAll(".arrow-up")[0].classList.toggle("animate");
  document.querySelector(".features-dropdown-menu").classList.toggle("show");

});

document.querySelectorAll(".arrow-up")[1].addEventListener("click",() =>{
  document.querySelectorAll(".arrow-up")[1].classList.toggle("animate");
  document.querySelector(".company-dropdown-menu").classList.toggle("show");
});
