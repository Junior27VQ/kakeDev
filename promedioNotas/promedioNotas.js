calcularPromedioNotas=function(){
    let primero=recuperarFloat("nota1");
    let segundo=recuperarFloat("nota2");
    let tercero=recuperarFloat("nota3");
    let promedio=calcularPromedio(primero,segundo,tercero);
    let resultado=promedio.toFixed(2);
    let mensaje="El promedio es: "+resultado;
    mostrarTexto("lblResultado",mensaje);
    if(resultado>0 && resultado<5){
        mostrarImagen("imagen","./imagenes/reprobado.gif");
        let mensaje="REPROBADO";
        mostrarTexto("lblmensaje",mensaje);
    }else if(resultado>=5 && resultado<=8){
        mostrarImagen("imagen","./imagenes/buenTrabajo.gif");
        let mensaje=("BUEN TRABAJO");
        mostrarTexto("lblmensaje",mensaje);
    }else if(resultado>8 && resultado<=10){
        mostrarImagen("imagen","./imagenes/excelente1.gif");
        let mensaje="EXCELENTE";
        mostrarTexto("lblmensaje",mensaje);
    }else{
        mostrarImagen("imagen","./imagenes/datosIncorrectos.gif");
        let mensaje="DATODS INCORRECTOS";
        mostrarTexto("lblmensaje",mensaje);
    }
}