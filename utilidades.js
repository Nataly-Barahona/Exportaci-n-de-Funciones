function formatearPrecio(precio) {
    return precio.toLocaleString("es-CO");
};

function esEmailValido(email) {
    return email.includes("@") && email.includes(".");// && es como "Y"  ambas deben cumplirse
}
function calcularDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje / 100);
}
export default {
    formatearPrecio,
    esEmailValido,
    calcularDescuento
};