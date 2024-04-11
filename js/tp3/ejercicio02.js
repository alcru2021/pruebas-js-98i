/*
Crear un script que solicite al usuario mediante 
un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, 
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:

Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, 
‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, 
‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, 
‘Sídney, Australia’, ‘El Cairo, Egipto’]

*/

// Array para almacenar las ciudades
let ciudades = [];

// Solicitar al usuario las ciudades mediante prompt
while (true) {
  let ciudad = prompt("Introduce el nombre de una ciudad:");
  if (ciudad === null) {
    break; // Si el usuario selecciona cancelar, salir del bucle
  }
  ciudades.push(ciudad); // Añadir la ciudad al arreglo
}

// Mostrar el arreglo generado
console.log("Arreglo de ciudades:", ciudades);

// Mostrar la longitud del arreglo
console.log("Longitud del arreglo:", ciudades.length);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última
document.write("<p>Primera ciudad: " + ciudades[0] + "</p>");
document.write("<p>Tercera ciudad: " + ciudades[2] + "</p>");
document.write("<p>Última ciudad: " + ciudades[ciudades.length - 1] + "</p>");

// Añadir en última posición la ciudad de París
ciudades.push("París");

// Escribir por pantalla el elemento que ocupa la segunda posición
console.log("Elemento en la segunda posición:", ciudades[1]);

// Sustituir el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
ciudades[1] = "Barcelona";

// Mostrar el arreglo actualizado
console.log("Arreglo de ciudades actualizado:", ciudades);
