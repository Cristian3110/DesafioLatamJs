//Ejercicio de DesafioLatam

function espejo(texto) {
  let textoSE = texto.trim();
  let textoValue = textoSE.length;
  let wordOneValue = textoValue / 2;
  let firstWord = textoSE.substring(0, wordOneValue);
  let secondWord = textoSE.substring(wordOneValue, textoValue);
  let palabra1 = firstWord.trim();
  let palabra2 = secondWord.trim();
  // console.log(firstWord);
  // console.log(secondWord);
  if (palabra1 === palabra2) {
    return true;
  } else {
    return false;
  }
}

console.log(espejo('figura figura'));

function mix(palabra1, palabra2) {
  const wordVacia1 = palabra1.trim();
  const wordVacia2 = palabra2.trim();
  const valueWord1 = wordVacia1.length;
  const valueWord2 = wordVacia2.length;
  const halfWord1 = valueWord1 / 2;
  const halfWord2 = valueWord2 / 2;
  const word1 = palabra1.substring(0, halfWord1);
  const word2 = palabra2.substring(halfWord2);
  const minWord1 = word1.toLowerCase();
  const minWord2 = word2.toLowerCase();

  return minWord1 + minWord2;
}

console.log(mix('Ubaldo', 'tenepe'));

function textoLargoCorto(texto) {
  const txtSp0 = texto.trim().length;

  if (txtSp0 > 10) {
    return 'Mucho texto';
  } else {
    return 'poco texto';
  }
}

console.log(textoLargoCorto('Holagteuioo'));

function primerosCaracteresMayusculas(texto) {
  let txtMayu = texto.trim().toUpperCase();
  let txtCharact = txtMayu.length;
  let txtMayus3 = txtMayu.substring(0, 3);
  if (txtCharact >= 3) {
    return txtMayus3;
  } else {
    return 'error';
  }
}

console.log(primerosCaracteresMayusculas('cr'));

/*************************************
 * Un ejercicio de antes que faltaba
 ***********************************/
