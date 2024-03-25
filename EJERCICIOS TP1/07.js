/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/



let num1 = Number(prompt('Ingrese el primer número: '));
let num2 = Number(prompt('Ingrese el segundo número: '));
let num3 = Number(prompt('Ingrese el tercer número: '));


if (num1 >= num2 && num1 >= num3) {
    document.write(`El ${num1} es el número más grande.`);
} else if (num2 >= num1 && num2 >= num3) {
    document.write(`El ${num2} es el número más grande.`);
} else {
    document.write(`El ${num3} es el número más grande.`);
}
