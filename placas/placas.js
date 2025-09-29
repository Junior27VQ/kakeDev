validarPlaca=function(){
    let placas=recuperarTexto("txtValidarPlaca");
    let erroresEstructura=validarEstructura(placas);
    
    if(erroresEstructura==true){
        mostrarTexto("lblValidar","ESTRUCTURA VALIDA");
        limpiar("lblErrore");
    }else{
        mostrarTexto("lblErrore","ESTRUCTURA INCORRECTA");
        limpiar("lblValidar");
    }
}
limpiar=function(idError){
    mostrarTexto(idError,"");
}