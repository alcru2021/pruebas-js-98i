/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/

let num1 = parseInt(prompt ('Ingreso el numero ' + 15));
let num2 = parseInt(prompt ('Ingreso el numero ' + 3));
let num3 = parseInt(prompt ('Ingrese el numero ' + 9));


function comparar(num1, num2) {
    if (num1 > num2 && num1 > num3) {
        return ('El ' + num1 + ' es el numero mas grande');
    } 
}

let resultado = comparar(15, 3, 9);
document.write (resultado);