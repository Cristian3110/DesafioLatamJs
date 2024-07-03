/************************
 * Recorriendo arreglos
 ************************/

// 1er ejercicio

function mostrar(arreglo) {
  for (i = 0; i <= 2; i++) {
    console.log(arreglo[i]);
  }
}

console.log(mostrar([1, 2, 3, 4, 5, 6]));

/******************************************** */

function mostrarDatos(arreglo, numero) {
  for (i = 0; i <= numero - 1; i++) {
    console.log(arreglo[i]);
  }
}

console.log(mostrarDatos([55, 66, 99, 88, 101, 22, 33], 4));

/**Mostrar Datos */

function mostrarDatos(arreglo, num1, num2) {
  for (i = num1; i < num2; i++) {
    console.log(arreglo[i]);
  }
}

console.log(mostrarDatos([55, 22, 66, 99, 45, 201, 23], 1, 3));

/**Mostrar datos al revés */

function mostrarDatosAlReves(arreglo) {
  for (i = arreglo.length - 1; i >= 0; i = i - 1) {
    console.log(arreglo[i]);
  }
}

console.log(mostrarDatosAlReves([55, 88, 9, 36, 2, 1001, 52]));

function mostrarPares(arreglo) {
  for (i = 0; i <= arreglo.length - 1; i++) {
    if (arreglo[i] % 2 == 0) {
      console.log(arreglo[i]);
    }
  }
}

console.log(mostrarPares([1, 2, 3, 3, 5, 6, 7, 8]));

/**Mostrar palabras que empiezan por A */

function mostrarLasPalabrasQueEmpiezanConA(arreglo) {
  for (i = 0; i <= arreglo.length - 1; i++) {
    let palabra = arreglo[i];
    let letra = palabra[0];
    if (letra === 'a') {
      console.log(arreglo[i]);
    }
  }
}
// console.log(
//   mostrarLasPalabrasQueEmpiezanConA(['pera', 'arena', 'casa', 'andreina'])
// );

/**funcion de palabras */

function palabras(arreglo, letra) {
  for (i = 0; i <= arreglo.length - 1; i++) {
    let palabra = arreglo[i];
    let leter = palabra[0];
    if (leter === letra) {
      console.log(arreglo[i]);
    }
  }
}
// console.log(palabras(['haciendo', 'alemán', 'rezar', 'andar'], 'a'));

/**Mostrar cada dos */

function mostrarCada2(arreglo) {
  for (i = 0; i <= arreglo.length - 1; i = i + 2) {
    console.log(arreglo[i]);
  }
}

console.log(mostrarCada2(['hola', 'alemán', 'que', 'andar']));

/** Pares que empizan con A */

function paresQueEmpiezenconA(arreglo) {
  for (i = 0; i <= arreglo.length - 1; i++) {
    let palabra = arreglo[i];
    let leter = palabra[0];
    if (leter == 'a' && i % 2 == 0) {
      console.log(arreglo[i]);
    }
  }
}

console.log(paresQueEmpiezenconA(['al', 'hacia', 'almendra', 'andar']));
