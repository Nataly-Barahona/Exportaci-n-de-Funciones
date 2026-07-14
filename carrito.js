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
    }

    subtotal() {
        let total = 0;
        for (const item of this.items) {
            total = total + (item.producto.precio * item.cantidad);// doble punto porque es dentro de dentro como abrir una carpeta dentro de otra carpeta
        }
        return total;
    }

    total() {
        const subtotal = this.subtotal();
        if (this.usuario.esVip) {
            return calcularDescuento(subtotal, 10); // solo 10 porque la operacion ya la hicimos en la funcion
        }
        return subtotal;
    }

    recibo() {
        let texto = this.usuario.saludo() + "\n";// significa un salto de linea
        for (const item of this.items) {
            texto += `${item.producto.nombre} x${item.cantidad}: ${formatearPrecio(item.producto.precio * item.cantidad)}\n`;
        }
        texto += `Total: ${formatearPrecio(this.total())}`;
        return texto;
    }
}

export default Carrito;
