saludar=function(){
    let nombreIngresado=recuperarTexto("txtNombre");
    let apellidoIngresado=recuperarTexto("txtApellido");
    let edadIngresada=recuperarInt("txtEdad");
    let estaturaIngresada=recuperarFloat("txtEstatura");
    let mensaje="Hola "+nombreIngresado+" "+apellidoIngresado+" tienes "+edadIngresada+" años y mides "+estaturaIngresada+" mts";
    mostrarTexto("lblResultado",mensaje);
    mostrarImagen("imgSaludo","./imagenes/d9e6f2b361b0451d3ca8af5a574c4bf6752fb516r1-480-480_hq.gif");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtEdad","");
    mostrarTextoEnCaja("txtEstatura","");
}
