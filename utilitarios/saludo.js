saludar=function(){
    let nombreIngresado=recuperarTexto("txtNombre");
    let apellidoIngresado=recuperarTexto("txtApellido");
    alert("Hola "+nombreIngresado+" "+apellidoIngresado);
}
recuperarTexto=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    return valorIngresado;
}