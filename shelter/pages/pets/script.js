// Pets
var menuIcon = document.querySelector(".toggle-menu-icon");
var menuDrawer = document.querySelector(".menu-drawer");
var logo = document.querySelector(".logo__title");
var subtitle = document.querySelector(".logo__subtitle");
var blackout = document.querySelector(".blackout");
let line = document.querySelectorAll("line");

const burgerToLight = () => { 
    line.forEach ( item => item.attributes.stroke.value = "#F1CDB3");
}
const burgerToDark = () => { 
    line.forEach ( item => item.attributes.stroke.value = "#000000");
}

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    menuDrawer.classList.toggle("open");
    logo.classList.toggle("display-none")
    blackout.classList.toggle("open");
    logo.classList.toggle("logo__title--menu");
    subtitle.classList.toggle("logo__subtitle--menu");
    
})

var drawerLinks = document.querySelectorAll(".nav-link")

drawerLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuIcon.classList.toggle("active");
        menuDrawer.classList.toggle("open");
        blackout.classList.remove("open");
        logo.classList.toggle("logo__title--menu");
        subtitle.classList.toggle("logo__subtitle--menu");
    })
})



const burgerColorChange = () => {

} 