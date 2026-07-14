import Producto from "./Producto.js";
import Usuario from "./Usuario.js";
import Carrito from "./Carrito.js";
import { esEmailValido } from "./utilidades.js";

const usuario = new Usuario("Nataly", "nataly@gmail.com", true);

console.log(esEmailValido(usuario.email));

const producto1 = new Producto("Mouse", 50000, "Tecnología", 10);
const producto2 = new Producto("Teclado", 80000, "Tecnología", 3);


const carrito = new Carrito(usuario);

console.log(carrito.agregar(producto1, 2));
console.log(carrito.agregar(producto2, 5)); // Debe decir "sin stock"

console.log(carrito.recibo());