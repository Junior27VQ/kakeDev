let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length)
}
recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}
probarAgregar=function(){
    let notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
    console.log(notas);
}
agregarNota=function(nota){
    notas.push(nota);
    mostrarTextoEnCaja("txtNota","");
}

ejecutarPromedio=function(){
    let promedio=calcularPromedio()
    mostrarTexto("lblNota",promedio);
}
calcularPromedio=function(){
    let sumaNotas=0;
    for(let valor=0;valor<notas.length;valor++){
        sumaNotas=sumaNotas+notas[valor];
    }
    let promedio=sumaNotas/notas.length;
    return promedio;
}