mostrarNumero=function(){
    console.log("antes del for");
    for(let i=0;i<4;i++){
        console.log(i);
    }
    console.log("despues del for");
}
mostrarNumero2=function(){
    console.log("antes del for");
    for(let indice=1;indice<5;indice++){
        console.log(indice);
    }
    console.log("despues del for");
}
mostrarPares=function(){
    console.log("antes del for");
    for(let x=2;x<=10;x+=2){
        console.log(x);
    }
    console.log("despues del for");
}
mostrarInverso=function(){
    console.log("antes del for");
    for(let i=10;i>=10;i--){
        console.log(i);
    }
    console.log("despues del for");
}
hackearNasaPelis=function(){
    //hackeando nasa 0%
    for(let porcentaje=0;porcentaje<=100;porcentaje+=10){
        console.log("hackeando nasa "+porcentaje+"%");
    }
    console.log("La nasa ha sido hackeanda XD")
}