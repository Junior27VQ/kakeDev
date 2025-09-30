validarEstructura = function (placa) {

    if (placa.length >= 0 && placa.length <= 8) {

        if (digitoUno(placa) & digitoDos(placa) & digitoTres(placa) & digitoCuatro(placa) &
            digitoCinco(placa) & digitoSeis(placa) & digitoSiete(placa) & digitoOcho(placa)) {
            mostrarTexto("lblError", "");
            return true;
        }
    } else {
        let error = mostrarTexto("lblError", "La placa deve tener 7 u 8 caracteres");
        return (error);
    }
}
digitoUno = function (caracter) {
    let primerCaracter = caracter.charAt(0);
    if (esMayuscula(primerCaracter)) {
        return true;
    } else {
        mostrarTexto("lblError", "Primer caracter letra mayuscula");
    }
}
digitoDos = function (caracter) {
    let segundoCaracter = caracter.charAt(1);
    if (esMayuscula(segundoCaracter)) {
        return true;
    } else {
        mostrarTexto("lblError", "Segundo caracter letra mayuscula");
    }
}
digitoTres = function (caracter) {
    let tercerCaracter = caracter.charAt(2);
    if (esMayuscula(tercerCaracter)) {
        return true;
    } else {
        mostrarTexto("lblError", "Tercer caracter letra mayuscula");
    }
}
digitoCuatro = function (caracter) {
    let cuartoCaracter = caracter.charAt(3);
    if (esGuion(cuartoCaracter)) {
        return true;
    } else {
        mostrarTexto("lblError", "Cuarto caracter guion");
    }
}
digitoCinco = function (caracter) {
    let quintoCaracter = caracter.charAt(4);
    if (esDigito(quintoCaracter)) {
        return true;
    } else {
        mostrarTexto("lblError", "Quinto caracter digito");
    }
}
digitoSeis = function (caracter) {
    let sextoCaracter = caracter.charAt(5);
    if (esDigito(sextoCaracter)) {
        return true;
    } else {
        mostrarTexto("lblError", "Sexto caracter digito");
    }
}
digitoSiete = function (caracter) {
    let septimoCaracter = caracter.charAt(6);
    if (esDigito(septimoCaracter)) {
        return true;
    } else {
        mostrarTexto("lblError", "Septimo caracter digito");
    }
}
digitoOcho = function (caracter) {
    let octavoCaracter = caracter.charAt(7);
    if (esDigito(octavoCaracter)) {
        return true;
    } else {
        mostrarTexto("lblError", "Octavo caracter digito");
    }
}

obtenerProvincia = function (placa) {
    let provinciaPorPlaca = {
        A: "Azuay",
        B: "Bolivar",
        U: "Cañar",
        C: "Carchi",
        X: "Cotopaxi",
        H: "Chimborazo",
        O: "El Oro",
        E: "Esmeraldas",
        W: "Galapagos",
        G: "Guayas",
        I: "Imbabuara",
        L: "Loja",
        R: "Los Rios",
        M: "Manabi",
        V: "Morona Santiago",
        N: "Napo",
        S: "Pastaza",
        P: "Pichincha",
        K: "Sucumbios",
        Q: "Orellana",
        T: "Tungurahua",
        Z: "Zamora Chinchipe",
        Y: "Santa Elena",
    };
    let primeraLetra=placa.charAt(0);
    if(esMayuscula(primeraLetra)){
        return provinciaPorPlaca[primeraLetra];
    }else{
        return "PROVINCIA INCORRECTA";
    }

}
