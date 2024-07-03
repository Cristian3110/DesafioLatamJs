// ciclos de desafios

function contarHasta(num) {
  let contador = 1;

  while (contador <= num) {
    console.log(contador);

    contador = contador + 1;
  }
}

// console.log(contarHasta(10));

//*************************************/

//Desde - Hasta

function desdeHasta(desde, hasta) {
  let contador = desde;

  while (contador <= hasta) {
    console.log(contador);

    contador = contador + 1;
  }
}

// console.log(desdeHasta(5, 15));

//*************************************/
// 2 en 2

function contarDeDosEnDos(numero) {
  let contador = 1;

  while (contador <= numero) {
    if (contador % 2 == 0) {
      console.log(contador);
    }
    contador = contador + 1;
  }
}

// console.log(contarDeDosEnDos(10));

/********************************* */

function sumarHasta(numero) {
  let contador = 1;
  let suma = 0;

  while (contador <= numero) {
    suma = suma + contador;
    contador = contador + 1;
  }
  return suma;
}

// console.log(sumarHasta(10));

/*********************************** */

function sumarDesdeHasta(num1, num2) {
  let contador = num1;
  let suma = 0;

  while (contador <= num2) {
    suma = suma + contador;

    contador = contador + 1;
  }
  return suma;
}

// console.log(sumarDesdeHasta(5, 15));

/*********************************** */

function sumarDeDosEnDos(desde, hasta) {
  let contador = desde;
  let suma = 0;

  while (contador <= hasta) {
    console.log(contador);
    suma = suma + contador;
    contador = contador + 2;
  }
  return suma;
}

// console.log(sumarDeDosEnDos(2, 10));

/***************************************** */

function productoria(numero) {
  let contador = 1;
  let producto = 1;

  while (contador <= numero) {
    console.log(producto);
    producto = producto * contador;
    contador = contador + 1;
  }
  return producto;
}

// console.log(productoria(10));

//****************************************** */

//ciclo for

function introduccionAFor() {
  for (i = 0; i <= 15; i++) {
    console.log(i);
  }
}
// console.log(introduccionAFor());

function mostrarNumeros(inicio, fin) {
  for (i = inicio; i <= fin; i++) {
    console.log(i);
  }
}

// console.log(mostrarNumeros(1, 8));

// ciclo for para decrementar desde el 10 hasta el 1

// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }

//suamtoria Pares

function sumatoriaPares(numero) {
  let suma = 0;
  for (i = 0; i <= numero; i = i + 2) {
    suma += i;
  }
  return suma;
}

console.log(sumatoriaPares(100));
