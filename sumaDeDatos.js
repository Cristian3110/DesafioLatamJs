/**
 * Suma de datos de un arreglo
 * 
 * suma = 0

for (contador = 1; contador <= 10; contador = contador + 1) {

  suma += contador

}

console.log(suma)

 */

/**suma de datos */

function sumarDatos(arreglo) {
  let contador = 0;
  for (i = 0; i <= arreglo.length - 1; i++) {
    let cantidad = arreglo[i];
    contador = contador + cantidad;
  }
  return contador;
}
// console.log(sumarDatos([15, 2, 3, 6, 4, 8]));

/**Promediar datos */

function promediarDatos(arreglo) {
  let divisor = arreglo.length;
  let suma = 0;
  let promedio = 0;
  for (i = 0; i <= arreglo.length - 1; i++) {
    suma = arreglo[i] + suma;
    promedio = suma / divisor;
  }
  return promedio;
}

// console.log(promediarDatos([1, 3, 4, 5, 1, 2]));

// función para contar pares

function contarPares(arreglo) {
  let contador = 0;
  for (i = 0; i <= arreglo.length - 1; i++) {
    let num = arreglo[i];
    if (num % 2 == 0) {
      contador = contador + 1;
    }
  }
  return contador;
}
// console.log(contarPares([22, 25, 3, 1, 4, 20]));

// contando impares

function contarImpares(arreglo) {
  let contador = 0;
  for (i = 0; i <= arreglo.length - 1; i++) {
    let num = arreglo[i];
    if (num % 2 !== 0) {
      contador = contador + 1;
    }
  }
  return contador;
}

// console.log(contarImpares([4, 6, 8, 2, 5]));

/**Ssumando pares */

function sumarPares(arreglo) {
  contador = 0;
  for (i = 0; i <= arreglo.length - 1; i++) {
    let num = arreglo[i];
    if (num % 2 == 0) {
      contador = contador + num;
    }
  }
  return contador;
}

console.log(sumarPares([1, 6, 8, 3, 5]));

/**
 * Similar a cuando sumamos los números en un arreglo, podemos concatenar las palabras de un arreglo. El algoritmo para resolver el problema es casi idéntico pero en lugar de sumar los números, concatenamos las palabras.

palabras = ""

palabras = palabras + " " + "Hola"

palabras = palabras + " " + "Mundo" 

console.log(palabras) // Hola Mundo
 */

function juntarPalabras(arreglo) {
  let palabras = '';

  for (i = 0; i <= arreglo.length - 1; i++) {
    palabras = palabras + ' ' + arreglo[i];
  }
  return palabras;
}

console.log(juntarPalabras(['Buenos', 'días', 'amigos']));

/***MENSAJE SECRETO */

function mensajeOculto(arreglo) {
  let mensaje = '';
  for (i = 0; i <= arreglo.length - 1; i++) {
    let word = arreglo[i];
    let letra = word.substring(0, 1);
    mensaje = mensaje + letra;
  }
  return mensaje;
}

console.log(
  mensajeOculto([
    'Excelencia',
    'Sabiduría',
    'Templanza',
    'Organizado',
    'Ilustrado',
    'Curioso',
    'Optimo',
  ])
);

/**JUEGOS DE ESPÍA */

function mensajeOculto2(arreglo) {
  let msg = '';
  for (i = 0; i <= arreglo.length - 1; i++) {
    if (i % 2 == 0) {
      let word = arreglo[i];
      let letra = word.substring(0, 1);
      msg = msg + letra;
    }
  }
  return msg;
}

console.log(
  mensajeOculto2(['Tronco', 'Perro', 'Oso', 'Gato', 'Perro', 'Loro', 'Onda'])
);
