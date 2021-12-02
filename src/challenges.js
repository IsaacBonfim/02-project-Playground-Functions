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
  let separador = string.split(' ');

  return separador;
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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
