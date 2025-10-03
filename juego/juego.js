let puntosUsuario=0;
let puntosComputador=0;
modificarPuntosUsuario=function(valor){
    puntosUsuario=puntosUsuario+valor;
    mostrarTexto("lblUsuario",puntosUsuario);
    if(puntosUsuario==5){
        mostrarTexto("lblRespuesta","HAS GANADO EL JUEGO");
    }
}
modificarPuntosComputador=function(valor){
    puntosComputador=puntosComputador+valor;
    mostrarTexto("lblComputador",puntosComputador);
    if(puntosComputador==5){
        mostrarTexto("lblRespuesta","EL COMPUTADOR TE HA VENCIDO")
    }
    
}
jugar=function(seleccionado){
    let elemento=generarElemento();
    let imagenes=generarRuta(elemento);
    mostrarImagen("imgJuego",imagenes);
    let ganador=determinarGanador(seleccionado,elemento);
    if(ganador==0){
        mostrarTexto("lblRespuesta","EMPATE");
    }else if(ganador==1){
        mostrarTexto("lblRespuesta","GANASTE LA PARTIDA!!");
        modificarPuntosUsuario(1);
    }else if(ganador==2){
        mostrarTexto("lblRespuesta","PERDISTE LA PARTIDA!!");
        modificarPuntosComputador(1);
    }
    
    
}
limpiar=function(){
    mostrarTexto("lblRespuesta","");
    mostrarTexto("lblUsuario","");
    mostrarTexto("lblComputador","");
    mostrarImagen("imgJuego","");
}