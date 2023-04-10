const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-ul");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)
// function NewTab() {
//   window.location.assign(
//     "https://drive.google.com/file/d/17kbXv9IRArX26dObGs4mIl_FxLO3XYXs/view?usp=sharingpushed","_blank"
//   );
// }

// let resume = document.getElementById("resume-link-2").addEventListener("click", NewTab)
function NewTab() {
  window.open(
    "https://drive.google.com/file/d/1RmOJPxug2dZY380e_W7hKDMGsUNQB1hm/view?usp=sharing",
    "_blank"
  );
}


// function NewTab() {
//   window.location.assign(
//     "https://drive.google.com/file/d/17kbXv9IRArX26dObGs4mIl_FxLO3XYXs/view?usp=sharingpushed"
//   );
// }

// dark mode
let bgimg = document.getElementById("particles-js");
let navimg = document.getElementById("nav-menu");
let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
light.style.display = "none";
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    navimg.style.backgroundImage = "url('../image/dark-mode.jpg')";
    bgimg.style.backgroundImage = "url('../image/dark-mode.jpg')";
    light.style.display = "none";
    dark.style.display = "block";
  } else {
    html.classList.add("dark");
    navimg.style.backgroundImage = "url('../image/light-mode.jpg')";
    bgimg.style.backgroundImage = "url('../image/light-mode.jpg')";
    dark.style.display = "none";
    light.style.display = "block";
  }
});

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come and have a look";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.querySelector("#particles-js").style.height = "900px";
  } else {
    document.querySelector("#particles-js").style.height = "750px";
  }
}

var x = window.matchMedia("(max-width: 850px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

function netlify(e) {
  window.open(e, "_blank");
}

function git(e) {
  window.open(e, "_blank");
}

GitHubCalendar(".calendar", "dheeraj-pal");

// or enable responsive functionality:
GitHubCalendar(".calendar", "dheeraj-pal", { responsive: true });
