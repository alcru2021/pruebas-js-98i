/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.

*/


let numero = Number(prompt("Ingrese un número:"));

// Verifico si el número es divisible por 2
if (numero % 2 === 0) {
    document.write("El " + numero + " es divisible por 2.<br>");
} else {
    document.write("El " + numero + " no es divisible por 2.<br>");
}


