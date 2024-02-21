// 3- CARRITO DE LA COMPRA: se le pide al usuario el precio de 5 productos. Se calcula el total. En el caso de sumar 100 euros o más, se le da un descuento del 15%. Imprimir en tal caso el precio original y el precio final con el descuento. Si no, solo el precio total. Nota: te servirá crear una variable que vaya acumulando el precio total a medida que se vayan introduciendo precios.

alert('Vamos a calcular el valor de tu compra. Recuerda que si superas 100€ tendrás un 15% de descuento. Para esto te pediré el precio de los 5 articulos comprados (acepto decimales).')

var importeTotal = 0;
var importeConDescuento = 0;
var importeDescuento = 0;
var totalArticulos = 5;
var porcDto = 0.15;

for (let i=0;i<totalArticulos;i++){

    let precioArticulo = parseFloat(prompt('Dime el precio del articulo '+(i+1)));
    importeTotal = importeTotal + precioArticulo;

}
document.write('<h1>Detalle de tu compra</h1>');
document.write('<h4>Importe Total: '+importeTotal.toFixed(2)+' €</h4>');

document.write('<h4>Total Articulos: '+totalArticulos+'</h4>');

if (importeTotal>100){
    document.write('<h2>Enhorabuena tienes un 15% de descuento</h2>');
    importeDescuento = importeTotal*porcDto;
    importeConDescuento = importeTotal * (1-porcDto);
    document.write('<h3>Descuento: '+importeDescuento.toFixed(2)+' €</h3>');
    document.write('<h3>Total a Pagar: '+importeConDescuento.toFixed(2)+' €</h3>');
}
