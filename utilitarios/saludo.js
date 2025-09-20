saludar=function(){
    let nombreIngresado=recuperarTexto("txtNombre");
    let apellidoIngresado=recuperarTexto("txtApellido");
    let edadIngresada=recuperarInt("txtEdad");
    let estaturaIngresada=recuperarFloat("txtEstatura");
    console.log(nombreIngresado,"",apellidoIngresado," ",edadIngresada," ",estaturaIngresada);
}

recuperarTexto=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    return valorIngresado;
}
recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFloat=parseFloat(valorCaja);
    return valorFloat;
}