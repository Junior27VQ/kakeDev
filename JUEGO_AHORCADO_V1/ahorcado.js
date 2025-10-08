//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
esMayuscula = function (caracter) {
    let cadena = caracter.charCodeAt();
    if (cadena >= 65 && cadena <= 90) {
        return true;
    } else {
        return false;
    }
}
guardarPalabra = function () {
    let palabra;
    let esValido = true;
    let caracteres = recuperarTexto("txtSecreta");
    if (caracteres.length == 5) {

        for (i = 0; i <= caracteres.length; i++) {
            palabra = caracteres.charAt(i);
            if (esMayuscula(palabra)) {
                palabraSecreta = palabraSecreta + palabra;
            } else if (!esMayuscula(palabra)) {
                esValido = false;
            }
        }
    } if (esValido == false) {
        alert("debe ingresar una palabra de 5 letras mayusculas");
    } else {
        alert("debe ingresar una palabra de 5 letras mayusculas");
    }
}
mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto("div0", letra)
    } else if (posicion == 1) {
        mostrarTexto("div1", letra)
    } else if (posicion == 2) {
        mostrarTexto("div2", letra)
    } else if (posicion == 3) {
        mostrarTexto("div3", letra)
    } else if (posicion == 4) {
        mostrarTexto("div4", letra)
    }
}
validar=function(letra){
    let letrasEncontradas;
    for(let posicion=0;posicion<=palabraSecreta.length;posicion++){
        letrasEncontradas=palabraSecreta.charAt(posicion);
        if(letrasEncontradas==letra){
        mostrarLetra(letra,posicion);
        letrasEncontradas=letrasEncontradas+letra;
        }
    }
}