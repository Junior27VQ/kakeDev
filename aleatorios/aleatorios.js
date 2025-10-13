let aleatorio = [];
numeroAleatorio = function () {
    let numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}
generarAleatorio = function () {
    let limite = recuperarInt("txtCantidad");
    mostrarTextoEnCaja("txtCantidad", "");
    let cantidad;
    let cantidadAleatoria;

    if(limite >= 5 && limite <= 20) {
            for (let i = 0; i < limite; i++) {
            console.log(limite);
            cantidadAleatoria=numeroAleatorio();
            aleatorio.push(cantidadAleatoria);
            console.log(cantidadAleatoria);
        }
        mostrarResultado(aleatorio);
    }else{
    mostrarTexto("divNumero", "El numero debe estar entre 5 y 20");
    }
}
mostrarResultado = function (arregloNumeros) {
    let cmpTabla = document.getElementById("divNumero");
    let contenidoTabla = "<table><tr><th>NOTAS</th></tr>";
    contenidoTabla += "<tr><td>" + arregloNumeros + "</td></tr>";
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}




