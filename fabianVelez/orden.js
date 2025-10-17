let personas=[
    {nombre:"Marcos", edad:18},
    {nombre:"Roberto", edad:15},
    {nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},
    {nombre:"Benja", edad:5},
];
agregarPersona=function(){
    let nombres=recuperarTexto("txtValidarNombre");
    let edad=recuperarInt("txtValidarEdad");
    let esValido=true;
    let nuevaPersona={};
    if(nombres.length<3){
        mostrarTexto("lblError","ERROR");
        esValido=false;
    }
    if(isNaN(edad) || edad<0 || edad>100){
        mostrarTexto("lblError0","ERROR");
        esValido=false;
    }
    if(esValido){
    nuevaPersona.nombre=nombres;
    nuevaPersona.edad=edad;
    alert("PERSONA AGREGADA CORRECTAMENTE")
    personas.push(nuevaPersona);
    }
    mostrarPersona();
}
mostrarPersona=function(){
    let cmpTabla=document.getElementById("divTabla");
    let tabla="<table><tr><th>NOMBRE</th><th>EDAD</th></tr>"
    for(let i=0;i<personas.length;i++){
        tabla+="<tr><td>"+personas[i].nombre+"</td><td>"+personas[i].edad+"</td></tr>";
    }tabla+="</table>"
    cmpTabla.innerHTML=tabla;
}
encontrarMayor=function(){
    let personaMayor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona= personas[i];
        console.log(elementoPersona.nombre+" "+elementoPersona.edad);
        if(elementoPersona.edad>personaMayor.edad){
            personaMayor=elementoPersona;
        }
    }
    return personaMayor;
}
determinarMayor=function(){
    let mayor=encontrarMayor();
    let mensaje="Nombre "+mayor.nombre+" Edad "+mayor.edad;
    mostrarTexto("lblMayor",mensaje);
}
encontrarMenor=function(){
    let personaMenor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona= personas[i];
        console.log(elementoPersona.nombre+" "+elementoPersona.edad);
        if(elementoPersona.edad<personaMenor.edad){
            personaMenor=elementoPersona;
        }
    }
    return personaMenor;
}
determinarMenor=function(){
    let menor=encontrarMenor();
    let mensaje="Nombre "+menor.nombre+" Edad "+menor.edad;
    mostrarTexto("lblMenor",mensaje);
}