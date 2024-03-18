/*
Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande

*/

let num1 = parseInt(prompt ('Ingreso el numero ' + 15));
let num2 = parseInt(prompt ('Ingreso el numero ' + 3));


function comparar(num1, num2) {
    if (num1 > num2) {
        return ('El ' + num1 + ' es el numero mas grande');
    } 
}

let resultado = comparar(15, 3);
document.write (resultado);