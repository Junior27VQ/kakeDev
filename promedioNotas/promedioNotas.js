calcularPromedioNotas=function(){
    let primero=recuperarFloat("nota1");
    let segundo=recuperarFloat("nota2");
    let tercero=recuperarFloat("nota3");
    let promedio=calcularPromedio(primero,segundo,tercero);
    let resultado=promedio.toFixed(2);
    let mensaje="El promedio es: "+resultado;
    mostrarTexto("resultado",mensaje);
    if(resultado>7){
        mostrarImagen("imagen","./imagenes/36Tr.gif");
    }else{
        mostrarImagen("imagen","./imagenes/soy-un-fracaso-total-finn.gif");
    }
}