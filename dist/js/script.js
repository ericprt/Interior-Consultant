const hamburger = document.querySelector("#hamburger");
const navList = document.querySelector("#nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navList.classList.toggle("translate-x-full");
});

// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("nav-fix");
  } else {
    header.classList.remove("nav-fix");
  }
};
