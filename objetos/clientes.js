let clientes=[
    {cedula:"025156523",nombre:"Lucio",edad:20},
    {cedula:"025156293",nombre:"Pedro",edad:25},
    {cedula:"025156353",nombre:"Jose",edad:40},
];
guardarCambios=function(){
    let clienteModificado={};
    clienteModificado.cedula=recuperarInt("txtCedula");
    clienteModificado.nombre=recuperarTexto("txtNombre");
    clienteModificado.edad=recuperarFloat("txtEdad");
    modificarClientes(clienteModificado);
    mostrarClientes();
}
modificarClientes=function(cliente){
    let clienteModificado=buscarCliente(cliente.cedula);
    if(clienteModificado!=null){
        clienteModificado.nombre=cliente.nombre;
        clienteModificado.edad=cliente.edad;
    }else{
        alert("El cliente no existe");
    }
}
ejecutarBusqueda=function(){
    let cedula=recuperarInt("txtBuscarCedula");
    let clienteEncontrado=buscarCliente(cedula);
    if(clienteEncontrado==null){
        alert("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",clienteEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre",clienteEncontrado.nombre);
        mostrarTextoEnCaja("txtEdad",clienteEncontrado.edad);
    }
}
function crearCliente(){
    let recuperarCedula=recuperarInt("txtCedula");
    let recuperarNombre=recuperarTexto("txtNombre");
    let recuperarEdad=recuperarFloat("txtEdad");
    let nuevocliente={cedula:recuperarCedula,nombre:recuperarNombre,edad:recuperarEdad};
    agregarCliente(nuevocliente);
    mostrarClientes();
    }
function agregarCliente(cliente){
    let resultado=buscarCliente(cliente.cedula);
    if(resultado==null){
        clientes.push(cliente);
    }else{
        alert("El cliente ya existe");
        }
}
function buscarCliente(cedula){
    let elementoCliente;
    let clienteEncontrado=null;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula==cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }  
    return clienteEncontrado;         
}
function mostrarClientes(){
    let cmpTabla=document.getElementById("divTabla");
    let tabla="<table border='1'><tr><th>Cedula</th><th>Nombre</th><th>Edad</th></tr>";
    for(let i=0;i<clientes.length;i++){
        tabla+="<tr><td>"+clientes[i].cedula+"</td><td>"+clientes[i].nombre+"</td><td>"+clientes[i].edad+"</td></tr>";
    }
    tabla+="</table>";
    cmpTabla.innerHTML=tabla;
}
