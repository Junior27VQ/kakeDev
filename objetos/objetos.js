
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