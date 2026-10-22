/* Crea una función anónima autoinvocada que defina una variable llamada contador
 y la incremente en cada invocación.
  Luego, intenta acceder a la variable contador fuera de la función y observa 
  lo que sucede.​*/

// funcion anónima autoinvocada
(function () {
    let contador = 0;
    contador++;
    console.log("Dentro de la función: ", contador);
})();

//intentar acceder a la variable fuera de la función
console.log(contador);