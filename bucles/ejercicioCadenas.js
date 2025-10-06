ejecutarPrueba1=function(){
    let mensaje=recuperarTexto("txtCadena");
    recorrerCadenas(mensaje);
}
recorrerCadenas=function(cadena){
    let caracter;
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" Posicion "+posicion)
    }
}
ejecutarPrueba2=function(){
    let mensaje=recuperarTexto("txtCadena");
    let respuesta=recorrerCadenasInvertidas(mensaje);
    cambiarTexto("lblInvertido",respuesta)
}
recorrerCadenasInvertidas=function(cadena){
    let caracter;
    let cadenaInvertida="";
    for(let posicion=cadena.length-1;posicion>=0;posicion--){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" Posicion "+posicion);
        cadenaInvertida=cadenaInvertida+caracter;
    }
    return cadenaInvertida;
}