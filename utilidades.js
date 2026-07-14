export function formatearPrecio(precio) {
    return precio.toLocaleString("es-CO");
}

export function esEmailValido(email) {
    return email.includes("@") && email.includes(".");
}

export function calcularDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje / 100);
}