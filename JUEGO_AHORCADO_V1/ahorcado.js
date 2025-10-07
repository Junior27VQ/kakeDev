//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula=function(caracter){
    let cadena=caracter.charCodeAt();
    if(cadena>=65 && cadena<=90){
        return true;
    }else{
        return false;
    }
}