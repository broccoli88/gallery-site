const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-toggler");

menuIcon.addEventListener("click", (e) => {
    nav.classList.toggle("menu-expanded");
});
