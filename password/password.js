validarPassword = function (password) {
    let caracter;
    let errores = "";
    let mayuscula = false;
    let digito = false;
    let especial = false;
    let caracteresEspeciales = "*-_";
    for (i = 0; i < password.length; i++) {
        caracter = password.charAt(i);
        if (caracter >= "A" && caracter <= "Z") {
            mayuscula = true;
        } else if (caracter >= "0" && caracter <= "9") {
            digito = true;
        } else if (caracteresEspeciales.includes(caracter)) {
            especial = true;
        }
    }
    if (password.length <= 7 || password.length >= 17) {
        errores += ("Error: La longitud minima es 8 y maxima es 16 caracteres")
    }
    if (!mayuscula) {
        errores += "Error: Debe tener al menos una letra mayuscula."
    }
    if (!digito) {
        errores += "Error: Debe tener al menos un digito (0-9)."
    }
    if (!especial) {
        errores += "Error: Debe tener al menos un caracter especial (*,-,_)."
    }
    return errores;

}
ejecutarValidacion = function () {
    let contrasena = recuperarTexto("txtCaracteres")
    let respuesta=validarPassword(contrasena);
    cambiarTexto("lblPassword", respuesta);

}
