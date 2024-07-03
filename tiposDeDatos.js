/***************************
 * Tipos de Datos y parsing
 ***************************/

function sumarDatos(arreglo) {
  let suma = 0;
  for (i = 0; i <= arreglo.length - 1; i++) {
    let data = arreglo[i];
    let dataNumber = Number(data);
    suma = suma + dataNumber;
  }
  return suma;
}

console.log(sumarDatos([4, '6', 8, '2', 3]));

// FUNCIÓN PROMEDIAR DATOS

function promediarDatos(arreglo) {
  let suma = 0;
  let promedio = 0;
  for (i = 0; i <= arreglo.length - 1; i++) {
    let data = arreglo[i];
    let dataN = Number(data);
    suma = suma + dataN;
    let num = arreglo.length;
    promedio = suma / num;
  }
  console.log(promedio);
}

console.log(promediarDatos([10, '2', '1', '3', 9]));

// MÉTODO SPLIT()

let texto = 'Hola Mundo';
let arreglo = texto.split(' ');

// PROMEDIAR DATOS

function sumarDatos2(data) {
  let suma = 0;
  let array = data.split(',');
  for (i = 0; i <= array.length - 1; i++) {
    let dato = array[i];
    let num = Number(dato);
    suma = suma + num;
  }
  return suma;
}
console.log(sumarDatos2('1,2,5,2,7,3'));

// TIPO DE DATO ---> NaN (Not a Number); verificando con isNaN()

//CONTADOR DE NaN

function contadorDeNaN(data) {
  let array = data.split(',');
  let suma = 0;
  for (i = 0; i <= array.length - 1; i++) {
    let dato = array[i];
    let num = Number(dato);
    let veri = isNaN(num);
    if (veri) {
      suma = suma + veri;
    }
  }
  console.log(suma);
}

console.log(contadorDeNaN('hola,123,3.14,0,texto'));

// IGNORANDO LOS DATOS DATOS NaN

function retornarPrimerNumero(arreglo) {
  for (i = 0; i <= arreglo.length - 1; i++) {
    let dato = arreglo[i];

    if (!isNaN(dato)) {
      console.log(dato);
      break;
    }
  }
}

console.log(retornarPrimerNumero(['5', 1, '2', 3, '4']));

/**UTILIZANDO ParseInt() */

//calculando años desde un arreglo con formato string

function sumarAños(arreglo) {
  let suma = 0;
  for (i = 0; i <= arreglo.length - 1; i++) {
    let data = arreglo[i];
    let converNum = parseInt(data);
    suma = suma + converNum;
  }
  console.log(suma);
}

console.log(
  sumarAños([
    '25 años',
    '30 años',
    '40 años',
    '50 años',
    '60 años',
    '70 años',
    '80 años',
    '90 años',
    '100 años',
  ]) // 545
);

/**
 *  ejercicio con arreglo de pesos ParseInt() elimina o descarta los decimales no redondea
 *  ni evalúa lo que viene después del número.
 *
 */

//? por cada kilogramo entero es de 1$ y si pesa menos de 1 Kg vale 0$
/**
 * 
 * function calcularCostoTotal(paquetes) {
  let suma = 0;
  let costo = 0;
  for (let i = 0; i <= paquetes.length - 1; i++) {
    let data = paquetes[i];
    let dataSep = data.split(' ');
    let num = dataSep[0];
    let dataNum = Number(num);

    if (dataNum >= 1) {
      suma = suma + dataNum;
      console.log(suma);
      costo = parseInt(suma);
    }
  }
  console.log(costo);
}
 */
// Calcular el valor de todos los paquetes

function calcularCostoTotal(paquetes) {
  let suma = 0;
  let costo = 0;
  for (let i = 0; i <= paquetes.length - 1; i++) {
    let data = paquetes[i];
    console.log(data);
    let dataSep = data.split(' ');
    let num = dataSep[0];
    // let dataNum = Number(num);
    let numero = parseFloat(num);

    if (numero >= 1) {
      suma = suma + numero;
      costo = parseInt(suma);
    } else if (numero < 1) {
      suma = suma + 0;
    }
  }
  console.log(suma);
}
console.log(
  calcularCostoTotal(['0.1 kg', '0.4 kg', '1.9 kg', '2.3 kg', '3.7 kg'])
);
