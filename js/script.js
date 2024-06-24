let menuVisible = false;
let menu = document.getElementById("menu");

function mostrarOcultarMenu() {
    if (!menuVisible) {
        menu.style.display = "block";
        menu.style.animation = "slideIn 0.3s forwards";
        menuVisible = true;
    } else {
        menu.style.animation = "slideOut 0.3s forwards";
        setTimeout(() => {
            menu.style.display = "none";
        }, 300); // Espera a que termine la animación de salida antes de ocultar el menú
        menuVisible = false;
    }
}


// Crear barras
function crearBarra(id_barra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


// Seleccionar todas las barras para luego manipularlas
let html = document.getElementById("html");
let wordpress = document.getElementById("wordpress");
let java = document.getElementById("java");
let javascript = document.getElementById("javascript");
let hibernate = document.getElementById("hibernate");
let springBoot = document.getElementById("springBoot");
let javaFx = document.getElementById("javaFx");
let csv = document.getElementById("csv");
let xml = document.getElementById("xml");
let python = document.getElementById("python");
let mySQL = document.getElementById("mySQL");
let phpMyAdmin = document.getElementById("phpMyAdmin");
let mongoDB = document.getElementById("mongoDB");
let ionic = document.getElementById("ionic");
let angular = document.getElementById("angular");

const barras = [
    { element: html, max: 16 },
    { element: wordpress, max: 12 },
    { element: java, max: 17 },
    { element: javascript, max: 14 },
    { element: hibernate, max: 12 },
    { element: springBoot, max: 14 },
    { element: javaFx, max: 14 },
    { element: csv, max: 12 },
    { element: xml, max: 14 },
    { element: python, max: 12 },
    { element: mySQL, max: 12 },
    { element: phpMyAdmin, max: 14 },
    { element: mongoDB, max: 12 },
    { element: ionic, max: 12 },
    { element: angular, max: 12 },
];

// Crear barras para cada habilidad
barras.forEach(barra => crearBarra(barra.element, barra.max));

// Guardar la cantidad de barras que se van pintando
let contadores = new Array(barras.length).fill(-1);
let entro = false;
// JavaScript para activar la animación al desplazarse hacia la sección de habilidades
window.addEventListener("scroll", function() {
    efectoHabilidades();
});

function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = habilidades.getBoundingClientRect().top - window.innerHeight;

    if (distancia_skills < 0) {
        pintarBarrasHabilidades();
        // Solo necesitamos pintar una vez, por lo que podemos eliminar el event listener aquí
        window.removeEventListener("scroll", efectoHabilidades);
    }
}

function pintarBarrasHabilidades() {
    const barras = document.querySelectorAll('.barra');

    barras.forEach(barra => {
        let cantidadPintar = parseFloat(barra.nextElementSibling.textContent);

        let elementos = barra.querySelectorAll('.e');
        let cantidad = elementos.length;

        let cantidadPintada = Math.floor((cantidadPintar / 100) * cantidad);

        elementos.forEach((elemento, index) => {
            if (index < cantidadPintada) {
                setTimeout(() => {
                    elemento.style.backgroundColor = "#940253";
                }, index * 200); // Intervalo de 200ms entre cada barra pintada
            }
        });
    });
}


