function mostrarMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("mostrar");
}


// Cerrar el menú cuando se hace clic fuera de él

window.addEventListener("click", function(event) {

    const menu = document.getElementById("menu");
    const boton = document.querySelector(".boton-menu");

    if (!boton.contains(event.target) &&
        !menu.contains(event.target)) {

        menu.classList.remove("mostrar");
    }

});