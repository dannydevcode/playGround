/*let precioVenta = parseInt(prompt("Ingrese precio del producto"));

let descuento = precioVenta * 0.25;
alert("total a pagar con descuento es: " + (precioVenta - descuento));
*/

//1) En una fabrica de computadoras se planea ofrecer a los clientes un descuento que
//dependerá del numero de computadoras que compre. Si las computadoras son menos de cinco
//se les dará un 10% de descuento sobre el total de la compra; si el numero de computadoras
//es mayor o igual a cinco pero menos de diez se le otorga un 20% de descuento; y si son 10 o
//mas se les da un 40% de descuento. El precio de cada computadora es de $11,000

let cantidadCompra = parseFloat(prompt("Ingrese cantidad:"));
let precioComputadora = 11000;
let descuento;
let precioTotal = precioComputadora * cantidadCompra;
if(Number.isInteger(cantidadCompra)){

    if (cantidadCompra < 5) {
      descuento = precioTotal * 0.1;
      let totalPagar = precioTotal - descuento;
      alert("El precio a pagar con 10% de descuento es: " + totalPagar);
    
    } else if (cantidadCompra >= 5) {
      descuento = precioTotal * 0.2;
      let totalPagar = precioTotal - descuento;
      alert("El precio a pagar con 20% de descuento es: " + totalPagar)
    } else if (cantidadCompra > 10) {
        descuento = precioTotal * 0.4;
        let totalPagar = precioTotal - descuento;
        alert("El precio a pagar con 40% de descuento es: " + totalPagar);
    }
} else {
    alert("Ingrese un numero valido");
}
