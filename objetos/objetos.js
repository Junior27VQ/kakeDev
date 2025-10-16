
probarAtributos=function(){
    let persona = {
        nombre: "Fabian",
        apellido: "Velez",
        edad: 35,
    estaFeliz: true
    };
    console.log(persona);
    console.log("Nombre: "+persona.nombre);
    console.log("Apellido: "+persona.apellido);
    if(persona.estaFeliz==false){
        console.log("No esta feliz");
    }else{
        console.log("Esta feliz");
    }
}
crearProducto=function(){
    let producto1={
        nombre: "Camisa",
        precio: 1.25,
        stok: 100
    };
    let producto2={
        nombre: "Pantalon",
        precio: 1.50,
        stok: 50
    };
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stok<=producto2.stok){
        console.log("El producto2 tiene mayor stok");
    }else{
        console.log("El producto1 tiene mayor stok");
    }
}
modificarAtributos=function(){
    let cuenta={
        numero: "2254554659",
        saldo: 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
crearCliente=function(){
    let cliente={
        cedula: "025156523",
        nombre: "juanito"
    }
    let cliente1={}
    cliente1.nombre="Ramon";
    cliente1.apellido="Salazar";
    cliente1.cedula="159876";
}
probarIncrementoSaldo=function(){
    let cta={numero: "2254554659",saldo: 0.0}
    incrementarSaldo(cta,150);
    console.log(cta.saldo);
}
incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}
probarDeterminarMayor=function(){
    let persona1={nombre:"Fabian",edad:35};
    let persona2={nombre:"Ana",edad:28};
    let mayor=determinarMayor(persona1,persona2);
    if(mayor != null){
        console.log("La persona mayor es: "+mayor.nombre);
    }else{
        console.log("Ambas personas tienen la misma edad");
    }
}
determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}