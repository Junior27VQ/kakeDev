//PRIMERA FUNCION
tasa=function(){
    let tasasInteres=recuperarFloat("txtValor");
    let valor=calcularTasaInteres(tasasInteres);
    mostrarTexto("lblResultado",valor);
}
calcularTasaInteres=function(ingresoAnual){
    if(ingresoAnual<300000){
        let valorTasa=ingresoAnual*0.16;
        valorRedondeado=valorTasa.toFixed(2);
        let mensaje=("Interes del 16%")
        return valorRedondeado +" "+ mensaje;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        let valorTasa=ingresoAnual*0.15;
        valorRedondeado=valorTasa.toFixed(2);
        let mensaje=("Interes del 15%")
        return valorRedondeado +" "+ mensaje;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        let valorTasa=ingresoAnual*0.14;
        valorRedondeado=valorTasa.toFixed(2);
        let mensaje=("Interes del 14%")
        return valorRedondeado +" "+ mensaje;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        let valorTasa=ingresoAnual*0.13;
        valorRedondeado=valorTasa.toFixed(2);
        let mensaje=("Interes del 13%")
        return valorRedondeado +" "+ mensaje;
    }else if(ingresoAnual>=2000000){
        let valorTasa=ingresoAnual*0.12;
        let mensaje=("Interes del 12%")
        valorRedondeado=valorTasa.toFixed(2);
        return valorRedondeado +" "+ mensaje;
    }else{
        console.log("NO APLICAS AL CREDITO");
    }
}
//SEGUNDA FUNCION
cuota=function(){
    let tiempo=recuperarInt("txtEdad");
    let salida=recuperarFloat("txtEgreso");
    let entrada=recuperarFloat("txtIngreso");
    let aprobado=calcularCapacidadPago(tiempo,entrada,salida);
    mostrarTexto("lblPago",aprobado);
}
calcularCapacidadPago=function(edad,ingreso,egreso){
    if(edad>50){
        let pago=(egreso-ingreso);
        let capacidad=pago*0.30;
        console.log("Cuota mensula que puede pagar un cliente "+capacidad+" 30%");
        let mensaje=("El 30%")
        let valorCuota=capacidad.toFixed(2);
        return valorCuota+" "+mensaje;
    }else if(edad<=50){
        let capacidad=(egreso-ingreso)*0.40;
        console.log("Cuota mensula que puede pagar un cliente "+capacidad+" 40%");
        let mensaje=("El 40%")
        let valorCuota=capacidad.toFixed(2);
        return valorCuota+" "+mensaje;
    }else{
        console.log("NO APROBADO")
    }
}
//TERCERA FUNCION
pagar=function(){
    let cuantos=recuperarInt("txtCantidad");
    let costo=recuperarFloat("txtPrecio");
    let valorPagar=calcularDescuento(costo,cuantos);
    mostrarTexto("lblDescuento",valorPagar);
}
calcularDescuento=function(precio,cantidad){
    if(cantidad<3){
        console.log("NO APLICA DESCUENTO")
    }else if(cantidad>=3 && cantidad<=5){
        let descuento=precio*0.2;
        console.log("APLICA DESCUENTO 2% "+descuento);
        let mensaje=("El 2%")
        let valorDescuento=descuento.toFixed(2);
        return valorDescuento+" "+mensaje;
    }else if(cantidad>=6 && cantidad<=11){
        let descuento=precio*0.3;
        console.log("APLICA DESCUENTO 3% "+descuento);
        let mensaje=("El 3%")
        let valorDescuento=descuento.toFixed(2);
        return valorDescuento+" "+mensaje;
    }else if(cantidad>=12){
        let descuento=precio*0.4;
        console.log("APLICA DESCUENTO 4% "+descuento);
        let mensaje=("El 4%")
        let valorDescuento=descuento.toFixed(2);
        return valorDescuento+" "+mensaje;
    }

}
//CUARTA FUNCION
colesterol=function(){
    let determinar=recuperarFloat("txtNivel");
    let ldl=determinarColesterolLDL(determinar);
    mostrarTexto("lblColesterol",ldl);
}
determinarColesterolLDL=function(nivelColesterol){ //Cualquier persona de 19 o menos años
    if(nivelColesterol>=120 && nivelColesterol<170){
       String=("Colesterol Total");
        return String;
    }else if(nivelColesterol>=110 && nivelColesterol<120){
        String=("NO-HDL");
        return String;
    }else if(nivelColesterol>=55 && nivelColesterol<110){
        String=("LDL");
        return String;
    }else if(nivelColesterol>45 && nivelColesterol<55){
        String=("HDL");
        return String;
    }else{
        String=("NIVELES INADECUADOS");
        return String;
    }    
}
//QUINTA FUNCION
clave=function(){
    let validar=recuperarTexto("txtValidar");
    let clave=validarClave(validar);
    mostrarTexto("lblClave",clave);
}
validarClave=function(clave){
    let cadena=clave.length;
    if(cadena>=8 && cadena<=16){
        String=("true");
        return String;
    }else{
        String=(false);
        return String;
    }
}
//SEXTA FUNCION
mayuscula=function(){
    let es=recuperarTexto("txtLetra");
    let letra=esMayuscula(es);
    mostrarTexto("lblMayuscula",letra);
}
esMayuscula=function(caracter){
    let cadena=caracter.charCodeAt();
    if(cadena>=65 && cadena<=90){
        return true;
    }else{
        return false;
    }
}
//SECTIMA FUNCION
minuscula=function(){
    let es=recuperarTexto("txtLetras");
    let letra=esMinuscula(es);
    mostrarTexto("lblMinuscula",letra);
}
esMinuscula=function(caracter){
    let cadena=caracter.charCodeAt();
    if(cadena>=97 && cadena<=122){
        return true;
    }else{
        return false;
    }
}
//OCTAVA FUNCION
digito=function(){
    let digito=recuperarTexto("txtNumero");
    let caracter=esDigito(digito);
    mostrarTexto("lblDigito",caracter);
}
esDigito=function(caracter){
    let cadena=caracter.charCodeAt();
    if(cadena>=48 && cadena<=57){
        return true;
    }else{
        return false;
    }
}
//NOVENA FUNCION
dar=function(){
    let matematica=recuperarFloat("txtAritmetica");
    let fisica=recuperarFloat("txtCuantica");
    let geometria=recuperarFloat("txtTopografia");
    let permitir=darPermiso(matematica,fisica,geometria);
    mostrarTexto("lblPermiso",permitir);
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }
}
//DECIMA FUNCION
otorgar=function(){
    let matematica=recuperarFloat("txtMate");
    let fisica=recuperarFloat("txtFisi");
    let geometria=recuperarFloat("txtGeome");
    let permitir=otorgarPermiso(matematica,fisica,geometria);
    mostrarTexto("lblPermisos",permitir);
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
     if(notaMatematica>90 || notaFisica>90 && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}
//ONCEABA FUNCION
dejar=function(){
    let matematica=recuperarFloat("txtMatematicas");
    let fisica=recuperarFloat("txtFisica");
    let geometria=recuperarFloat("txtGeometria");
    let promedio=dejarSalir(matematica,fisica,geometria);
    mostrarTexto("lblSalir",promedio);
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
     if(notaMatematica>90 && notaFisica>90 || notaGeometria>80){
        return true;
    }else if(notaMatematica<notaFisica){
        return true;
    }else{
        return false;
    }
}