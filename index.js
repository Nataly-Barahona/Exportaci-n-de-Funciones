import Producto from "./producto.js";
import Usuario from "./usuario.js";
import Carrito from "./carrito.js";
import { esEmailValido } from "./utilidades.js";

//console.log(utilidades.esEmailValido(usuario.email));

const usuario = new Usuario("miguel", "miguel.12@gmail.com", true);

console.log(esEmailValido(usuario.email));

const producto1 = new Producto("shampoo", 50000, "aseo", 10);
const producto2 = new Producto("peluche para morder", 80000, "mascotas", 3);


const carrito = new Carrito(usuario);

console.log(carrito.agregar(producto1, 2));
console.log(carrito.agregar(producto2, 5)); // Debe decir "sin stock"

console.log(carrito.recibo());