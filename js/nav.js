"use strict";

btnMenu.addEventListener("click", toggleMenu);

let btnMenu = document.querySelector(".btn-menu");

function toggleMenu() {
    document.querySelector(".barra-nav").classList.toggle("show")
}