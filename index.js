import Producto from "./producto.js";
const producto1 = new Producto("shampo", 50000, "aseo", 5 );
const producto2 = new Producto("Peluche para morder",25000, "mascotas",0);
const producto3 = new Producto("cerveza",3000, "licores",7);

console.log(producto1.stock);
console.log(producto1.hayStock(3));
console.log(producto1.ficha());