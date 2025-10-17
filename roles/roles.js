let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
]
let esNuevo = false;
let roles = []
let rol = {}
mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let tabla = "<table border='1'><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    for (let i = 0; i < empleados.length; i++) {
        tabla += "<tr><td>" + empleados[i].cedula + "</td><td>" + empleados[i].nombre + "</td><td>" + empleados[i].apellido + "</td><td>" + empleados[i].sueldo + "</td></tr>";
    }
    tabla += "</table>";
    cmpTabla.innerHTML = tabla;
}
guardar = function () {
    let recuperarCedula = recuperarTexto("txtCedula");
    let recuperarNombre = recuperarTexto("txtNombre");
    let recuperarApellido = recuperarTexto("txtApellido");
    let recuperarSueldo = recuperarFloat("txtSueldo");

    if (recuperarCedula.length != 10) {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 caracteres");
        esNuevo = false;
    }
    if (recuperarNombre.length > 3) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener maxim 3 caracteres");
        esNuevo = false;
    } else if (recuperarNombre != recuperarNombre.toUpperCase()) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener caracteres mayusculas");
        esNuevo = false;
    }
    if (recuperarApellido != recuperarApellido.toUpperCase()) {
        mostrarTexto("lblErrorApellido", "El apellido debe tener caracteres mayusculas");
        esNuevo = false;
    } else if (recuperarApellido.length > 3) {
        mostrarTexto("lblErrorApellido", "El apellido debe tener maxim 3 caracteres");
        esNuevo = false;
    }
    if (recuperarSueldo < 400 || recuperarSueldo > 500) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser mayor a 400");
        esNuevo = false;
    }
    if (esNuevo == true) {
        let empleado = { cedula: recuperarCedula, nombre: recuperarNombre, apellido: recuperarApellido, sueldo: recuperarSueldo };
        let nuevo = agregarEmpleado(empleado);
        esNuevo = false;
        if (nuevo == true) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE: ");
            mostrarEmpleados();
            ejecutarCancelar();
        } else if (esNuevo == false) {
            let retorno = buscarEmpleado(recuperarCedula);
            if (retorno) {
                retorno.nombre = recuperarNombre;
                retorno.apellido = recuperarApellido;
                retorno.sueldo = recuperarSueldo;
                agregarEmpleado(retorno);
                alert("EMPLEADO MODIFICADO EXITOSAMENTE");
                mostrarEmpleados();
                ejecutarCancelar();
            } else {
                alert("ERROR: No se pudo encontrar el empkeado a modificar")
            }
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA: " + empleado.cedula);
        }
    }
}
function agregarEmpleado(empleado) {
    let resultado = buscarEmpleado(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        return true;
    } else {
        alert("El cliente ya existe");
        return false;
    }
}
ejecutarBusqueda = function () {
    let buscar = recuperarFloat("txtBusquedaCedula");
    let empleadoEncontrado = buscarEmpleado(buscar);
    if (empleadoEncontrado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", empleadoEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoEncontrado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoEncontrado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoEncontrado.sueldo);
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
    }
}
function buscarEmpleado(cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}

mostrarOpcionEmpleados = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    ejecutarCancelar();
}
mostrarOpcionRoles = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btn2Guardar");
    mostrarRoles();
}
mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}
ejecutarCancelar = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    esNuevo = false;
}
limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    ejecutarCancelar();
}
//funciones de Rol
function buscarPorRol() {
    let numeroCedula = recuperarTexto("txtBusquedaCedulaRol");
    let saldo = buscarEmpleado(numeroCedula);
    if (saldo != null) {
        mostrarTexto("infoCedula", saldo.cedula);
        mostrarTexto("infoNombre", saldo.nombre + " " + saldo.apellido);
        mostrarTexto("infoSueldo", saldo.sueldo);
        mostrarTextoEnCaja("txtBusquedaCedulaRol", "");
    } else {
        alert("El empleado no existe")
    }
}
function calcularAporteEmpleado(sueldo) {
    let valor = (sueldo * 9.45) / 100;
    return valor;
}
function calcularValorAPagar(sueldoEmpleado, aporteIES, descuento) {
    let valorAPagar = (sueldoEmpleado - aporteIES - descuento);
    return valorAPagar
}
function calcularRol() {
    let cantidad = recuperarFloatDiv("infoSueldo");
    let digito = recuperarFloat("txtDescuentos");
    let validarDigito = true;
    if (!isNaN(digito) && digito)
        validarDigito = false;
    if (digito > 0 && digito < cantidad) {
        let aporte = calcularAporteEmpleado(cantidad);
        mostrarTexto("infoIESS", aporte);
        let valor = calcularValorAPagar(cantidad, aporte, digito);
        mostrarTexto("infoPago", valor);
        habilitarComponente("btn2Guardar");
        return valor;
    }

}
function buscarRol(cedulaEmpleado) {
    let elmntoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < rol.length; i++) {
        elmntoEmpleado = rol[i];
        if (elmntoEmpleado.cedula == cedulaEmpleado) {
            empleadoEncontrado = elmntoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}
function agregarRol(objetoRol) {
    let rolEncontrado = buscarRol(rol.cedula);
    if (rolEncontrado == null) {
        roles.push(rol);
        alert("ROL AGREGADO CORRECTAMENTE");
    } else {
        alert("Ya existe unrol con la cedula " + rol.cedula);
    }
    return rolEncontrado;
}
function calcularAporteEmpleador(sueldo) {
    let valor = (sueldo * 11.15) / 100;
    return valor;
}
function guardarRol() {
    let numcedula = recuperarDiv("infoCedula");
    let prinombre = recuperarDiv("infoNombre");
    let digsueldo = recuperarDiv("infoSueldo");
    let valor = calcularRol();
    let aporEmpleado = calcularAporteEmpleado(digsueldo);
    let aporEmplador = calcularAporteEmpleador(digsueldo);
    rol.cedula = numcedula;
    rol.nombre = prinombre;
    rol.sueldo = digsueldo;
    rol.valorAPagar = valor;
    rol.aporteEmpelado = aporEmpleado;
    rol.aporteEmpleador = aporEmplador;
    let rolAgregado = agregarRol(rol);
    if (rolAgregado == null) {
        alert("EXITO");
        deshabilitarComponente("btn2Guardar");
    }
    mostrarRoles();
    mostrarTotales();
}
function mostrarRoles() {
    let cmpTabla = document.getElementById("tablaResumen");
    let tabla = "<table border='1'><tr><th>CEDULA</th><th>NOMBRE</th><th>VALOR A PAGAR</th><th>APORTE EMPLEADO</th><th>APORTE EMPLEADOR</th></tr>";
    for (let i = 0; i < roles.length; i++) {
        tabla += "<tr><td>" + roles[i].cedula + "</td><td>" + roles[i].nombre + "</td><td>" + roles[i].valorAPagar + "</td><td>" + roles[i].aporteEmpelado + "</td><td>" + roles[i].aporteEmpleador + "</td></tr>";
    }
    tabla += "</table>";
    cmpTabla.innerHTML = tabla;
}
function mostrarTotales() {
    let totalEmpleado=0;
    let totalEmpleador=0;
    let totalAPagar=0;
    for (let i = 0; i < roles.length; i++) {
        totalEmpleado += roles[i].aporteEmpelado;
        totalEmpleador += roles[i].aporteEmpleador;
        totalAPagar += roles[i].valorAPagar;
    }
    mostrarTexto("infoTotalPago", totalAPagar);
    mostrarTexto("infoAporteEmpresa", totalEmpleador);
    mostrarTexto("infoAporteEmpleado", totalEmpleado);
}