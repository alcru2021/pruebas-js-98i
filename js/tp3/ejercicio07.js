/*
Escriba un script que muestre la tabla de multiplicar 
de un número ingresado por pantalla, la 
creación de la tabla debe ser realizada con 
una función y mostrar solo los resultados 
del 1 al 10 del número elegido por el usuario.
*/

// Función para mostrar la tabla de multiplicar
function mostrarTablaMultiplicar(numero) {
  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Pedir al usuario que ingrese un número
const numeroUsuario = parseInt(
  prompt("Ingresa un número para ver su tabla de multiplicar:")
);

// Verificar si el usuario ingresó un número válido
if (isNaN(numeroUsuario)) {
  console.log("Por favor, ingresa un número válido.");
} else {
  // Llamar a la función para mostrar la tabla de multiplicar
  mostrarTablaMultiplicar(numeroUsuario);
}
