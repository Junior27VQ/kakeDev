saludar=function(){
    let nombreIngresado=recuperarTexto("txtNombre");
    let apellidoIngresado=recuperarTexto("txtApellido");
    let edadIngresada=recuperarInt("txtEdad");
    let estaturaIngresada=recuperarFloat("txtEstatura");
    let mensaje="Hola "+nombreIngresado+" "+apellidoIngresado+" tienes "+edadIngresada+" años y mides "+estaturaIngresada+" mts";
    mostrarTexto("lblResultado",mensaje);
    console.log(nombreIngresado,"",apellidoIngresado," ",edadIngresada," ",estaturaIngresada);
}

mostrarTexto=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
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