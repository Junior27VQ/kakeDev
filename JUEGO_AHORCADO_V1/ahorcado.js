//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let intentos=0;
let coincidencias=0;
let errores=0;
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

        for (i = 0; i <= caracteres.length-1; i++) {
            palabra = caracteres.charAt(i);
            if (esMayuscula(palabra)) {
                palabraSecreta = palabraSecreta + palabra;
            } else if (!esMayuscula(palabra)) {
                esValido = false;
            }
        } if (esValido == false) {
        alert("debe ingresar una palabra de 5 letras mayusculas");
        }
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
    let correcto=false;
    for(let posicion=0;posicion<=palabraSecreta.length-1;posicion++){
        letrasEncontradas=palabraSecreta.charAt(posicion);
        if(letrasEncontradas==letra){
        mostrarLetra(letra,posicion);
        letrasEncontradas=letrasEncontradas+letra;
        coincidencias++;
        correcto=true;
        }
    }
    if (correcto==false){
        errores++;
        mostrarAhorcado();
    }
}
ingresarLetra=function(){
    intentos++;
    let letra=recuperarTexto("txtLetra");
    if(esMayuscula(letra)){
        validar(letra);
        if(coincidencias==5){
            mostrarImagen("ahorcadoImagen","ganador.gif");
        }else if(intentos==10){
            mostrarImagen("ahorcadoImagen","gameOver.gif");
        }
    }else{
        alert("SOLO SE ACEPTAN LETRAS MAYUSCULAS");
    }
}
mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png")
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png")
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png")
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png")
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png")
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png")
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png")
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png")
    }

}