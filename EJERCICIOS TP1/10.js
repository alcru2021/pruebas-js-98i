/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
(sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2

*/

let numero = parseInt(prompt("Ingrese un número: 20"));

// Verifico si el número es divisible por 2
if (numero % 2 === 0) {
    document.write("El " + numero + " es divisible por 2.<br>")
}

// Verifico si el número es divisible por 3
if (numero % 3 === 0) {
    document.write("El " + numero + " es divisible por 3.<br>");
} else {
    document.write("El " + numero + " no es divisible por 3.<br>");
}

// Verifico si el número es divisible por 5
if (numero % 5 === 0) {
    document.write("El " + numero + " es divisible por 5.<br>");
} else {
    document.write("El " + numero + " no es divisible por 5.<br>");
}

// Verifico si el número es divisible por 7
if (numero % 7 === 0) {
    document.write("El " + numero + " es divisible por 7.<br>");
} else {
    document.write("El " + numero + " no es divisible por 7.<br>");
}