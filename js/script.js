"use strict";

document.getElementById("formulario").addEventListener("submit", captcha);
let imgValue = 0;
var arrSrc = ["images/captcha-01.png", "images/captcha-02.png", "images/captcha-03.png", "images/captcha-04.png",
"images/captcha-05.png", "images/captcha-06.png", "images/captcha-07.png"];
var arrValue = ["w2yp7","253dc","bny23","dn5df","gnc3n","n4wwn","pgm2e"];

function cambiarImagen() {
    let randomNumber = Math.floor(Math.random() * 7);
    document.getElementById("img-captcha").src = arrSrc[randomNumber];
    imgValue = arrValue[randomNumber];
}
cambiarImagen();

function captcha(event) {
    event.preventDefault();
    let respuesta = document.getElementById("captcha-text").value;
    if (respuesta == imgValue) {
        document.getElementById("valid-captcha").innerHTML = "Captcha válido";
        document.getElementById("pedido-realizado").innerHTML = "Tu pedido ha sido realizado, gracias por confiar en nosotros.";
    }
    else {
        document.getElementById("valid-captcha").innerHTML = "Captcha inválido";
        cambiarImagen();
    }
}

let cantidadesProducto = document.querySelectorAll(".cantidad-producto")

for (let i = 0; i < cantidadesProducto.length; i++){
    cantidadesProducto[i].addEventListener("click", mostrarPrecio);
}

function mostrarPrecio(){
    let precios = [1999, 1499, 1199, 2250, 1750, 1250];
    let total = 0;    
    for (let j = 0; j < cantidadesProducto.length; j++){
        total = total + cantidadesProducto[j].options[cantidadesProducto[j].selectedIndex].value*precios[j];
    }
    document.getElementById("precio").innerHTML = "$" + total;
}

