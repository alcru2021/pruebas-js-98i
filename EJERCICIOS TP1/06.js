/*
Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande

*/




let num1 = parseInt(prompt ('Ingreso el numero '));
let num2 = parseInt(prompt ('Ingreso el numero '));

if (num1 > num2) {
    document.write (`El numero mayor es ${num1}`);
    
} else if (num2 < num1) {
    document.write (`El numero mayor es ${num2}`);
}


