let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length)
}
recorrerArreglo = function () {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}
generarTabla = function () {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}
mostrarNotas = function () {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>NOTAS</th></tr>";
    let miNota;
    for (let i = 0; i < notas.length; i++) {
        miNota = notas[i];
        contenidoTabla += "<tr><td>" + miNota + "</td></tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

probarAgregar = function () {
    let notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
    console.log(notas);
}
agregarNota = function (nota) {
    notas.push(nota);
    mostrarTextoEnCaja("txtNota", "");
    mostrarNotas();
}

ejecutarPromedio = function () {
    let promedio = calcularPromedio()
    mostrarTexto("lblNota", promedio);
}
calcularPromedio = function () {
    let sumaNotas = 0;
    for (let valor = 0; valor < notas.length; valor++) {
        sumaNotas = sumaNotas + notas[valor];
    }
    let promedio = sumaNotas / notas.length;
    return promedio;
}