validarPlaca=function(){
    let placas=recuperarTexto("txtValidarPlaca");
    let erroresEstructura=validarEstructura(placas);
    let provincia=obtenerProvincia(placas);
    mostrarTexto("lblProvincia",provincia);
    let vehiculo=obtenerTipoVehiculo(placas);
    mostrarTexto("lblVehiculo",vehiculo);
    let picoyplaca=obtenerDiaPicoYPlaca(placas);
    mostrarTexto("lblDiaPicoYPlaca",picoyplaca);
    if(erroresEstructura==true){
        mostrarTexto("lblValidar","ESTRUCTURA VALIDA");
        mostrarTexto("lblError1","");
    }else{
        mostrarTexto("lblError1","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblValidar","");
    }
}
limpiar=function(){
    mostrarTextoEnCaja("txtValidarPlaca","");
    mostrarTexto("lblError","");
    mostrarTexto("lblValidar","");
    mostrarTexto("lblError1","");
    mostrarTexto("lblProvincia","");
    mostrarTexto("lblError2","");
    mostrarTexto("lblVehiculo","");
    mostrarTexto("lblError3","");
    mostrarTexto("lblDiaPicoYPlaca","");
    mostrarTexto("lblError4","");
}