import { formatearPrecio, calcularDescuento } from "./utilidades.js";
class Carrito {
    constructor(usuario) {
        this.usuario = usuario;
        this.items = [];
    }

    agregar(producto, cantidad) {
        if (!producto.hayStock(cantidad)) {
            return "sin stock";
        }
        this.items.push({ producto, cantidad });
        return `Se agregó ${cantidad} unidad(es) de ${producto.nombre} al carrito`;
    }

    subtotal() {
        let total = 0;
        for (const item of this.items) {
            total = total + (item.producto.precio * item.cantidad);
        }
        return total;
    }

    total() {
        const subtotal = this.subtotal();
        if (this.usuario.esVip) {
            return calcularDescuento(subtotal, 10);
        }
        return subtotal;
    }

    recibo() {
        let texto = this.usuario.saludo() + "\n";
        for (const item of this.items) {
            texto += `${item.producto.nombre} x${item.cantidad}: ${formatearPrecio(item.producto.precio * item.cantidad)}\n`;
        }
        texto += `Total: ${formatearPrecio(this.total())}`;
        return texto;
    }
}

export default Carrito;