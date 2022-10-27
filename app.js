const slide = document.querySelector(".switch");
const names = document.querySelectorAll(".name");
const followersNumber = document.querySelectorAll(".followers-number");
const followers = document.querySelectorAll(".followers");
const totalFollowers = document.querySelectorAll(".total-followers");
const pageView = document.querySelectorAll(".page-view");
const mainNumber = document.querySelectorAll(".main-number");
const colorContainer = document.querySelector(".color-container");
const darkModeBtn = document.querySelector(".dark-mode-btn");
const mainContainer = document.querySelector(".main-container");
const stats = document.querySelectorAll(".stats");
const eachReview = document.querySelectorAll(".each-review");

darkModeBtn.addEventListener("click", () => {
  slide.classList.toggle("slide");
  darkModeBtn.classList.toggle("dark-bg-toggle");
  colorContainer.classList.toggle("dark-bg-pattern");
  mainContainer.classList.toggle("dark-bg");
  stats.forEach(function (e) {
    e.classList.toggle("dark-bg-card");
    e.classList.remove("statss");
    e.classList.add("statsss");
  });
  eachReview.forEach(function (e) {
    e.classList.toggle("dark-bg-card");
    e.classList.remove("each-reviews");
    e.classList.add("each-reviewss");
  });
  mainNumber.forEach(function (e) {
    e.classList.toggle("dark-main-text");
  });
  followersNumber.forEach(function (e) {
    e.classList.toggle("dark-main-text");
  });
  names.forEach(function (e) {
    e.classList.toggle("dark-text");
  });
  followers.forEach(function (e) {
    e.classList.toggle("dark-text");
  });
  pageView.forEach(function (e) {
    e.classList.toggle("dark-text");
  });
  totalFollowers.forEach(function (e) {
    e.classList.toggle("dark-text");
  });
});
