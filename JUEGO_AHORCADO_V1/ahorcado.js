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
    let esValido=true;
    let caracteres = recuperarTexto("txtSecreta");
    if (caracteres.length == 5) {

        for (i = 0; i <= caracteres.length; i++) {
            palabra = caracteres.charAt(i);
            if (esMayuscula(palabra)) {
                palabraSecreta = palabraSecreta + palabra;
            } else if(!esMayuscula(palabra)){
                esValido=false;
            }
        }
    } if(esValido==false){
        alert("debe ingresar una palabra de 5 letras mayusculas");
    }else{
        alert("debe ingresar una palabra de 5 letras mayusculas");
    }
}