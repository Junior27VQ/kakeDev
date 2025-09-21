saludar=function(){
    let nombreIngresado=recuperarTexto("txtNombre");
    let apellidoIngresado=recuperarTexto("txtApellido");
    let edadIngresada=recuperarInt("txtEdad");
    let estaturaIngresada=recuperarFloat("txtEstatura");
    let mensaje="Hola "+nombreIngresado+" "+apellidoIngresado+" tienes "+edadIngresada+" años y mides "+estaturaIngresada+" mts";
    mostrarTexto("lblResultado",mensaje);
    mostrarImagen("imgSaludo","./imagenes/d9e6f2b361b0451d3ca8af5a574c4bf6752fb516r1-480-480_hq.gif");
}

mostrarTexto=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}
mostrarImagen=function(idComponente,rutaImagen){
    let componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
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