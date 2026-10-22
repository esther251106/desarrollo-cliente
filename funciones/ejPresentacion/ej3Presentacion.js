/*Crea una función autoinvocada que reciba dos parámetros: una cadena de
 texto y un número. Dentro de la función, concatena la cadena con el número y
  muestra el resultado en consola.​ */

(function (cadena, numero) {
    console.log(cadena + numero);
})("Edad: ", 25);