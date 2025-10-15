let frutas=["pera","manzana","mango","fresa","uva","kiwi","banano","cereza","durazno","naranja"];

agregarFruta=function(){
    let frutaIngresada=recuperarTexto("txtFruta");
    mostrarTextoEnCaja("txtFruta","");
    let resultado=buscar(frutaIngresada);
    if (resultado == null){
        alert("No existe la fruta");
    }else{
        alert("Fruta encontrada"+frutaIngresada);
    }
}
buscar=function(fruta){
    let encontrado=null;
    let elemento;
    for(let indice=0;indice<frutas.length;indice++){
        elemento=frutas[indice];
        if(elemento == fruta){
            encontrado=elemento;
            break;
        }
    }
    return encontrado;
}