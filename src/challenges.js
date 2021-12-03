// Desafio 1
function compareTrue(p1, p2) {
  let result = null;

  if (p1 === true && p2 === true) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let separado = string.split(' ');

  return separado;
}

// Desafio 4
function concatName(array) {
  let concatenado = array[array.length - 1];

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (i === 0) {
      concatenado += `, ${array[i]}`;
    }
  }

  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;

  return pontos;
}

// Desafio 6
function maiorElemento(array) {
  let maior = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (maior < array[i]) {
      maior = array[i];
    }
  }

  return maior;
}

function highestCount(array) {
  let count = 0;
  let maior = maiorElemento(array);

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function inverteNegativo(num) {
  if (num < 0) {
    num *= -1;
  }
  return num;
}

function catAndMouse(mouse, cat1, cat2) {
  let vencedor = null;
  let gato1 = cat1 - mouse;
  let gato2 = cat2 - mouse;

  gato1 = inverteNegativo(gato1);
  gato2 = inverteNegativo(gato2);

  if ((gato1) < (gato2)) {
    vencedor = 'cat1';
  } else if ((gato2) < (gato1)) {
    vencedor = 'cat2';
  } else if ((gato1) === (gato2)) {
    vencedor = 'os gatos trombam e o rato foge';
  }

  return vencedor;
}

// Desafio 8
function fizz(array, index, rArray) {
  if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
    rArray[index] = 'fizz';
  }
}

function buzz(array, index, rArray) {
  if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
    rArray[index] = 'buzz';
  }
}

function fizzBuzz(array) {
  let resultado = [];

  for (let i = 0; i < array.length; i += 1) {
    fizz(array, i, resultado);
    buzz(array, i, resultado);

    if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      resultado[i] = 'fizzBuzz';
    } else if (resultado[i] === undefined) {
      resultado[i] = 'bug!';
    }
  }

  return resultado;
}

// Desafio 9
function separador(string) {
  let separado = [];

  for (let i = 0; i < string.length; i += 1) {
    separado[i] = string[i];
  }

  return separado;
}

function concatenar(array) {
  let concatenado = '';

  for (let i = 0; i < array.length; i += 1) {
    concatenado += array[i];
  }
  return concatenado;
}

function a1(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'a') {
      array[i] = '1';
    } else if (array[i] === '1') {
      array[i] = 'a';
    }
  }
}

function e2(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'e') {
      array[i] = '2';
    } else if (array[i] === '2') {
      array[i] = 'e';
    }
  }
}

function i3(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'i') {
      array[i] = '3';
    } else if (array[i] === '3') {
      array[i] = 'i';
    }
  }
}

function o4(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'o') {
      array[i] = '4';
    } else if (array[i] === '4') {
      array[i] = 'o';
    }
  }
}

function u5(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'u') {
      array[i] = '5';
    } else if (array[i] === '5') {
      array[i] = 'u';
    }
  }
}

function encode(string) {
  let cod = separador(string);

  a1(cod);
  e2(cod);
  i3(cod);
  o4(cod);
  u5(cod);

  cod = concatenar(cod);

  return cod;
}

function decode(string) {
  let cod = separador(string);

  u5(cod);
  o4(cod);
  i3(cod);
  e2(cod);
  a1(cod);

  cod = concatenar(cod);

  return cod;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
