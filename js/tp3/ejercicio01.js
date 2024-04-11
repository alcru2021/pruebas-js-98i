/*
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista los doce nombres del arreglo.

Output:
*/

// Crear el array de meses
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Mostrar por pantalla los nombres de los meses en forma de lista
console.log("Meses del año:");
for (let i = 0; i < meses.length; i++) {
  console.log("-", meses[i]);
}
