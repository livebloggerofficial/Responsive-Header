const mobileNavmenu = document.querySelector(".mobile-navmenu");
const menuIcon = document.querySelector(".mobile-navmenu .menu-icon");
const closeIcon = document.querySelector(".mobile-navmenu .close-icon");

menuIcon.addEventListener("click", () => {
  mobileNavmenu.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileNavmenu.classList.remove("active");
});
