function transformacionCondicional(frase) {
  let texto = frase.trim();
  let txtLetra = frase.substring(0, 1);
  let txtMayus = texto.toUpperCase();
  let txtMin = texto.toLowerCase();
  if (txtLetra == 'a') {
    return txtMayus;
  } else {
    return txtMin;
  }
}

console.log(transformacionCondicional('Arbol'));
