// Pets
var menuIcon = document.querySelector(".toggle-menu-icon")
var menuDrawer = document.querySelector(".menu-drawer")
var logo = document.querySelector(".logo__title")
var blackout = document.querySelector(".blackout")

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    menuDrawer.classList.toggle("open");
    logo.classList.toggle("display-none")
    blackout.classList.toggle("open");
})

var drawerLinks = document.querySelectorAll(".nav-link")

drawerLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuIcon.classList.toggle("active");
        menuDrawer.classList.toggle("open");
    })
})