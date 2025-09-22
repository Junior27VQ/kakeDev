jugar=function(){
    let aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        console.log("Es mayor a 3");
        cambiarTexto("lblMensaje","Ganaste");
    }else{
        console.log("Es menor a 3");
        cambiarTexto("lblMensaje","Estas de malas");
        }
}
lanzarDado=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*6+1;
    let numeroEntero=parseInt(numeroMultiplicado);
    return numeroEntero;
}