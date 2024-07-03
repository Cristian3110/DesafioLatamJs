// arreglos en desafío

function ultimoYPrimero(arreglo) {
  const primero = arreglo[0];
  const ultimo = arreglo[arreglo.length - 1];
  console.log(primero + ultimo);
}

console.log(ultimoYPrimero(['hola', 50, 3, 4, 'OK']));

function agregarSi(arreglo, nombre) {
  const largo = arreglo.length;

  if (largo < 5) {
    const agregado = arreglo.push(nombre);
    return arreglo;
  } else {
    return arreglo;
  }
}
console.log(agregarSi(['ana', 'luis', 'maria'], 'jose'));

function limpiarYAgregar(arreglo, nombre) {
  const nombreLimpio = nombre.trim();
  const agregado = arreglo.push(nombreLimpio);
  return arreglo;
}

function reemplazar(arreglo, num1, num2) {
  const newArray = (arreglo[0] = num1);
  const newArray2 = (arreglo[arreglo.length - 1] = num2);
  return arreglo;
}
console.log(reemplazar([2, 3, 6], 20, 10));

function modificarPorElMayor(arreglo, numero1, numero2) {
  if (numero1 > numero2) {
    const num1 = (arreglo[0] = numero1);
    return arreglo;
  } else if (numero2 > numero1) {
    const num2 = (arreglo[0] = numero2);
    return arreglo;
  }
}

console.log(modificarPorElMayor([1, 50, 60, 30], 155, 5));

/* Escribe tu código aquí */
function borrarFinal(arreglo) {
  arreglo.splice(arreglo.length - 1, 1);
  return arreglo;
}

console.log(borrarFinal([55, 66, 33, 44]));
/* Fin */
/**
 *
 * @param {**********************************} arreglo
 * @param {*} cantidad
 */
function borrarYContarElementos(arreglo, cantidad) {
  const eliminado = arreglo.splice(0, cantidad);

  return arreglo.length;
}

console.log(borrarYContarElementos([88, 101, 569, 44], 2));

//******************************************************** */

function rotarALaIzquierda(arreglo) {
  const eliminadoFirsElement = arreglo.splice(0, 1);
  const agregarElement = arreglo.push(eliminadoFirsElement[0]);

  return arreglo;
}

console.log(rotarALaIzquierda([120, 15, 16, 88, 101]));

//**********************************************/

function izqDerecha(arreglo, num) {
  if (num < 100) {
    const agrega = arreglo.push(num);
    return arreglo;
  } else if (num >= 100) {
    const agregar = arreglo.push(num);
    const eliminadoLastElement = arreglo.splice(arreglo.length - 1, 1);
    const agregarElement = arreglo.unshift(eliminadoLastElement[0]);
    return arreglo;
  }
}

console.log(izqDerecha([1212, 15, 55, 66], 200));
