validarPlaca=function(){
    let placas=recuperarTexto("txtValidarPlaca");
    let erroresEstructura=validarEstructura(placas);
    let provincia=obtenerProvincia(placas);
    mostrarTexto("lblProvincia",provincia);
    let vehiculo=obtenerTipoVehiculo(placas);
    mostrarTexto("lblVehiculo",vehiculo)
    if(erroresEstructura==true){
        mostrarTexto("lblValidar","ESTRUCTURA VALIDA");
        limpiar("lblError1");
    }else{
        mostrarTexto("lblError1","ESTRUCTURA INCORRECTA");
        limpiar("lblValidar");
    }
}
limpiar=function(idError){
    mostrarTexto(idError,"");
}