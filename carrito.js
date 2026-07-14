import { formatearPrecio, calcularDescuento } from "./utilidades.js";
class Carrito {
constructor(usuario) {
    this.usuario = usuario;
    this.items = [];
    }

    agregar(producto, cantidad) {
        if (producto.hayStock(cantidad) === false) {
    return "sin stock";
        }
        this.items.push({ producto, cantidad });
        return `Se agregó ${cantidad} unidad(es) de ${producto.nombre} al carrito`;
    }}