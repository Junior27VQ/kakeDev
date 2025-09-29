
total = function () {
    let producto;
    let cantidad;
    let precio;

    let existeError = false;
    producto = recuperarTexto("txtProducto");
    cantidad = recuperarInt("txtCantidad");
    precio = recuperarFloat("txtPrecio");

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    if (esProductoValido(producto, "lblErrorProducto") & esCantidadValido(cantidad, "lblErrorCantidad") & esPrecioValido(precio, "lblErrorPrecio")) {
        valorSubtotal = calcularSubtotal(precio, cantidad);
        let subtotalFormato = valorSubtotal.toFixed(2);
        mostrarTexto("lblSubtotal", subtotalFormato);
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        let descuentoFormato = valorDescuento.toFixed(2);
        mostrarTexto("lblDescuento", descuentoFormato);
        valorIVA = calcularIVA(precio);
        let ivaFormato = valorIVA.toFixed(2);
        mostrarTexto("lblIVA", ivaFormato);
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        let totalFormato = valorTotal.toFixed(2);
        mostrarTexto("lblTotal", totalFormato);

    } else {
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
    }
}
esProductoValido = function (producto, idError) {
    let hayErrores = false;
    if (producto.length <1 ||producto.length > 10) {
        mostrarTexto(idError, "El texto debe tener entre 1 y 10 caracteres");
        existeError = true;
    }else{
        mostrarTexto("lblErrorProducto","");
    }
    return !hayErrores;
}
esCantidadValido = function (cantidad, idError) {
    let hayErrores = false;
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idError, "La valor debe estar entre 0 y 100");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idError, "");
    }
    return !hayErrores;
}
esPrecioValido = function (precio, idError) {
    let hayErrores = false;
    if (precio < 0 || precio > 50) {
        mostrarTexto(idError, "La valor debe estar entre 0 y 50");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idError, "");
    }
    return !hayErrores;
}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTextoEnCaja("txtCantidad", "");

}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let valorDescuento;
    if (cantidad >= 12) {
        valorDescuento = (subtotal * 5) / 100;
    }else if (cantidad >= 6 && cantidad <= 11) {
        valorDescuento = (subtotal * 4) / 100;
    }else if (cantidad >= 3 && cantidad <= 5) {
        valorDescuento = (subtotal * 3) / 100;
    }else if(cantidad<3){
        valorDescuento=0;
    }
    return valorDescuento;
}

calcularIVA = function (monto) {
    let valorIVA = (monto * 0.12);
    return valorIVA;
}
calcularSubtotal = function (precio, cantidad) {
    let valorSubtotal = (precio * cantidad);
    return valorSubtotal;
}
calcularTotal = function (subtotal, descuento, iva) {
    let valorTotal = (subtotal - descuento + iva);
    return valorTotal;
}






