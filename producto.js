class Producto {
constructor(nombre,precio, categoria,stock) {
    this.nombre = nombre;
    this.precio = precio; 
    this.categoria = categoria;
    this.stock = stock; 
}
hayStock (cantidad){
        return cantidad <= this.stock ;// No se pone IF porque el sistema lo deduce osea se convierte en una funcion booleana
        };
    
ficha(){
return (`El producto es: ${this.nombre}, tiene un precio de  ${this.precio}, categoria ${this.categoria}, y tenemos en stock ${this.stock}`);
}}; 

export default Producto;