/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210




Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.

*/

let numero = parseInt(prompt("Ingrese un número: 20"));

// Verifico si el número es divisible por 2
if (numero % 2 === 0) {
    document.write("El " + numero + " es divisible por 2.<br>")
}

// Verifico si el número es divisible por 5
if (numero % 5 === 0) {
    document.write("El " + numero + " es divisible por 5.<br>");
}

//----------------------------------------------------------------

let numero2 = parseInt(prompt("Ingrese un número: 210"));

// Verifico si el número es divisible por 2
if (numero2 % 2 === 0) {
    document.write("El " + numero2 + " es divisible por 2.<br>")
}

// Verifico si el número es divisible por 3
if (numero2 % 3 === 0) {
    document.write("El " + numero2 + " es divisible por 3.<br>");
} else {
    document.write("El " + numero2 + " no es divisible por 3.<br>");
}

// Verifico si el número es divisible por 5
if (numero2 % 5 === 0) {
    document.write("El " + numero2 + " es divisible por 5.<br>");
} else {
    document.write("El " + numero2 + " no es divisible por 5.<br>");
}

// Verifico si el número es divisible por 7
if (numero2 % 7 === 0) {
    document.write("El " + numero2 + " es divisible por 7.<br>");
} else {
    document.write("El " + numero2 + " no es divisible por 7.<br>");
}