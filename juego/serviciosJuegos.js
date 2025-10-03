obtenerAleatorio=function(){
     let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*3+1;
    let numeroEntero=parseInt(numeroMultiplicado);
    return numeroEntero;
}
generarElemento=function(){
    let valor=obtenerAleatorio();
    if(valor==1){
        return "piedra";
    }else if(valor==2){
        return "papel";
    }else if(valor==3){
        return "tijeras"
    }

}
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1==eleccionJugador2){
        return 0; //Empate
    }
    if(
    (eleccionJugador1=="piedra" && eleccionJugador2=="tijeras") ||
    (eleccionJugador1=="papel" && eleccionJugador2=="piedra") ||
    (eleccionJugador1=="tijeras" && eleccionJugador2=="papel")
    ){
    return 1; //Gana Jugador 1
    }else{
        return 2; //Gana Jugador 2
    }
}
generarRuta=function(nombre){
    if(nombre=="piedra"){
        return "imgJuego","./imagenes/piedra.png";
    }else if(nombre=="papel"){
        return "imgJuego","./imagenes/papel.png";
    }else if(nombre=="tijeras"){
        return "imgJuego","./imagenes/tijeras.png";
    }
}
