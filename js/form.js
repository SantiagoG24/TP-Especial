"use strict"

let productos = [
    {
        source : "brownie.png",
        producto : "Brownie",
        descripcion : "Torta Brownie con nuez, dulce de leche natural y merengue italiano, decorado con hilos de chocolate",
        precio : "$2499",
        precioOferta : "$1999",
    },
    {
        source : "tiramisu.png",
        producto : "Tiramisu",
        descripcion : "Base de Vainillas con café, crema de café , crema chantilly y cubierta de cacao",
        precio : "$1750",
        precioOferta : "$1499",
    },
    {
        source : "lemonpie.png",
        producto : "Lemonpie",
        descripcion : "Tarta dulce, crema de limón y merengue italiano",
        precio : "$1999",
        precioOferta : "$1199",
    },
    {
        source : "chocotorta.png",
        producto : "Chocotorta",
        descripcion : "Galletitas de chocolate, relleno de dulce de leche y queso crema, copos de crema de chocolate",
        precio : "",
        precioOferta : "$2250",
    },
    {
        source : "frutosrojos.png",
        producto : "Frutos Rojos",
        descripcion : "Tarta dulce, crema chantilly, frutos rojos y gelatina",
        precio : "",
        precioOferta : "$1750",
    },
    {
        source : "torta.png",
        producto : "Torta",
        descripcion : "Torta rellena de dulce de leche, con cobertura a eleccióno",
        precio : "",
        precioOferta : "$1250",
    }
];

mostrarEncabezado();
mostrarTabla();

function mostrarEncabezado(){
    let tabla = document.getElementById("tabla");
    let tHead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th1 = document.createElement("th")
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let tBody = document.createElement("tbody");

    th1.className = "primera-col";
    th2.className = "segunda-col";
    th3.className = "tercera-col";
    th1.innerHTML = "Productos"
    th2.innerHTML = "Descripción"
    th3.innerHTML = "Precio"
    tBody.className = "show"
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tHead.appendChild(tr);
    tabla.appendChild(tHead);
    tabla.appendChild(tBody);

}

document.getElementById("btn-agregar").addEventListener("click", agregarItem);
document.getElementById("btn-agregar-tres").addEventListener("click", agregarTres);
document.getElementById("btn-vaciar-tabla").addEventListener("click", vaciarTabla);

function agregarItem(event){
    event.preventDefault();
    console.log("click en agregar");

    let source = document.getElementById("source-input");
    let producto = document.getElementById("producto-input");
    let descripcion = document.getElementById("descripcion-input");
    let precio = document.getElementById("precio-original-input");
    let precioOferta = document.getElementById("precio-actual-input");

    let elementoTabla = {
        source : source.value,
        producto : producto.value,
        descripcion : descripcion.value,
        precio : precio.value,
        precioOferta : precioOferta.value,
    }

    productos.push(elementoTabla);

    console.table(productos);

    mostrarTabla();
}

function agregarTres(event){
    event.preventDefault();
    console.log("aguante boca");
    let productosOfertas = [
        {
            source : "chocotorta.png",
            producto : "Chocotorta",
            descripcion : "Galletitas de chocolate, relleno de dulce de leche y queso crema, copos de crema de chocolate",
            precio : "$2499",
            precioOferta : "$1999",
        },
        {
            source : "tiramisu.png",
            producto : "Tiramisu",
            descripcion : "Base de Vainillas con café, crema de café , crema chantilly y cubierta de cacao",
            precio : "$1750",
            precioOferta : "$1499",
        },
        {
            source : "lemonpie.png",
            producto : "Lemonpie",
            descripcion : "Tarta dulce, crema de limón y merengue italiano",
            precio : "$1999",
            precioOferta : "$1199",
        }
    ]
    for (const producto of productosOfertas) {
        productos.push(producto);  
    }

    mostrarTabla();
}

function vaciarTabla(event){
    event.preventDefault();
    productos = [];
    console.table(productos);

    mostrarTabla();
}

function mostrarTabla(){
    document.querySelector(".show").innerHTML = ""
    for (const i of productos) {
        document.querySelector(".show").innerHTML += `<tr>
                                                        <td class="primer-col"><div>${i.producto}</div><img class="img-tabla" src="images/${i.source}"
                                                                alt="${i.producto}"></td>
                                                        <td class="segunda-col">${i.descripcion}</td>
                                                        <td class="tercera-col">
                                                            <p class="precio-original">${i.precio}</p>
                                                            <p>${i.precioOferta}</p>
                                                        </td>
                                                    </tr>`
    }
}