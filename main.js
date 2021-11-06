const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav_toggle");
const navClose = document.getElementById("nav_close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// removeing the menu when link is clicked
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Theme Switching functionality
const darkBtn = document.querySelector("#dark-btn");
const lightBtn = document.querySelector("#light-btn");
const body = document.body;

darkBtn.onclick = () => {
  body.classList.add("dark_theme");
  darkBtn.classList.add("hidden");
  lightBtn.classList.remove("hidden");
  localStorage.setItem("theme", "dark_theme");
};

lightBtn.onclick = () => {
  body.classList.remove("dark_theme");
  darkBtn.classList.remove("hidden");
  lightBtn.classList.add("hidden");
  localStorage.setItem("theme", "");
};

const theme = localStorage.getItem("theme");
if (theme) {
  document.body.classList.add(theme);
  if (theme === "dark_theme") {
    darkBtn.classList.add("hidden");
    lightBtn.classList.remove("hidden");
  } else {
    darkBtn.classList.remove("hidden");
    lightBtn.classList.add("hidden");
  }
}
