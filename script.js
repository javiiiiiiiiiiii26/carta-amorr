function abrirCarta() {
    document.querySelector(".carta-frontal").style.display = "none";
    document.querySelector(".carta-contenido").style.display = "block";
}

function respuesta(opcion) {
    if (opcion === "Sí") {
        alert("¡YAY! 💖 Te amo muchísimo 😍");
    } else {
        alert("😢 Oh no... igual te amo 💔");
    }
}
