esMayuscula = function(caracter){
    cadena=caracter.charCodeAt();
    if(cadena>=65 && cadena<=90){
        return true;
    }else{
        return false;
    }
}
esDigito = function(caracter){
    let cadena=caracter.charCodeAt();
    if(cadena>=48 && cadena<=57){
        return true;
    }else{
        return false;
    }
}
esGuion = function(caracter){
    let cadena=caracter.charCodeAt();
    if(cadena==45){
        return true;
    }else{
        return false;
    }
}