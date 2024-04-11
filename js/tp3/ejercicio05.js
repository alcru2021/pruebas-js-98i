/*
Definir una función que muestre información sobre 
una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, 
la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
*/

function analizarCadena(cadena) {
  // Comprobar si la cadena está formada sólo por mayúsculas
  if (cadena === cadena.toUpperCase()) {
    console.log("La cadena está formada sólo por mayúsculas.");
  }
  // Comprobar si la cadena está formada sólo por minúsculas
  else if (cadena === cadena.toLowerCase()) {
    console.log("La cadena está formada sólo por minúsculas.");
  }
  // Si no es ni todo mayúsculas ni todo minúsculas, entonces es una mezcla
  else {
    console.log("La cadena es una mezcla de mayúsculas y minúsculas.");
  }
}

// Ejemplo
analizarCadena("HolaMundo"); // Salida: La cadena es una mezcla de mayúsculas y minúsculas.
analizarCadena("HOLAMUNDO"); // Salida: La cadena está formada sólo por mayúsculas.
analizarCadena("holamundo"); // Salida: La cadena está formada sólo por minúsculas.
