/*
Solicitar por pantalla al usuario ingresar 
el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y 
mostrarlo por pantalla.
*/

// Función para calcular el perímetro del rectángulo
function calcularPerimetro(lado1, lado2) {
  return 2 * (lado1 + lado2);
}

// Solicitar al usuario que ingrese los valores de los lados del rectángulo
var lado1 = parseFloat(
  prompt("Ingrese el valor del primer lado del rectángulo:")
);
var lado2 = parseFloat(
  prompt("Ingrese el valor del segundo lado del rectángulo:")
);

// Calcular el perímetro utilizando la función calcularPerimetro
var perimetro = calcularPerimetro(lado1, lado2);

// Mostrar el resultado por pantalla
document.write(
  "El perímetro del rectángulo con lados " +
    lado1 +
    " y " +
    lado2 +
    " es: " +
    perimetro
);
