"use strict";

let btnMenu = document.querySelector(".btn-menu");

btnMenu.addEventListener("click", toggleMenu);

function toggleMenu(){
    // console.log("menu clickeado");
    document.querySelector(".barra-nav").classList.toggle("show")
}