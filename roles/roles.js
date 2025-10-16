let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]
esNuevo=false;

mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let tabla="<table border='1'><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    for(let i=0;i<empleados.length;i++){
        tabla+="<tr><td>"+empleados[i].cedula+"</td><td>"+empleados[i].nombre+"</td><td>"+empleados[i].apellido+"</td><td>"+empleados[i].sueldo+"</td></tr>";
    }
    tabla+="</table>";
    cmpTabla.innerHTML=tabla;
}

mostrarOpcionEmpleados=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    esNuevo=false;
}
mostrarOpcionRoles=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
}
