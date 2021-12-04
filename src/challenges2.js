// Desafio 10
function verificarVazio(array) {
  if (array.length === 0) {
    array = 'Vazio!';
  }
  return array;
}

function techList(array, name) {
  let ordenado = array.sort();
  let lista = [];

  for (let i = 0; i < ordenado.length; i += 1) {
    let tecno = {
      tech: '',
      name: '',
    };

    tecno.tech = ordenado[i];
    tecno.name = name;

    lista.push(tecno);
  }

  return verificarVazio(lista);
}

// Desafio 11
function validacaoValores(array) {
  let resultado = true;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      resultado = false;
      break;
    }
  }

  return resultado;
}

function repeticao(array, num) {
  let n = num;
  let rept = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (n === array[i]) {
      rept += 1;
    }
  }

  return rept;
}

function validacaoRepeticao(array) {
  let resultado = true;
  let rept = 0;

  for (let i = 0; i < array.length; i += 1) {
    rept = repeticao(array, array[i]);

    if (rept >= 3) {
      resultado = false;
      break;
    }
  }

  return resultado;
}

function PhoneNumber(array) {
  let number = '';

  for (let i = 1; i < array.length; i += 1) {
    if (i === 1) {
      number += `(${array[i - 1]}${array[i]}) `;
    } else if (i === 6) {
      number += `${array[i]}-`;
    } else {
      number += array[i];
    }
  }

  return number;
}

function generatePhoneNumber(array) {
  let number = '';

  if (array.length !== 11) {
    number = 'Array com tamanho incorreto.';
  } else if (validacaoValores(array) === false || validacaoRepeticao(array) === false) {
    number = 'não é possível gerar um número de telefone com esses valores';
  } else {
    number = PhoneNumber(array);
  }

  return number;
}

// Desafio 12
function tamanhoCheck(lnA, lnB, lnC) {
  let result = true;

  if (lnA > lnB + lnC || lnB > lnC + lnA || lnC > lnA + lnB) {
    result = false;
  }

  return result;
}

function valorAbsoluto(lnA, lnB, lnC) {
  let result = true;

  if (lnA < Math.abs(lnB - lnC) || lnB < Math.abs(lnC - lnA) || lnC < Math.abs(lnA - lnB)) {
    result = false;
  }

  return result;
}

function triangleCheck(lineA, lineB, lineC) {
  let resultado = true;

  if (tamanhoCheck(lineA, lineB, lineC) === false || valorAbsoluto(lineA, lineB, lineC) === false) {
    resultado = false;
  }

  return resultado;
}

// Desafio 13
function hydrate(string) {
  let aux = /\d+/g;
  let bebida = string.match(aux).map(Number);
  let total = 0;
  let resultado = '';

  for (let i = 0; i < bebida.length; i += 1) {
    total += bebida[i];
  }

  if (total === 1) {
    resultado = `${total} copo de água`;
  } else {
    resultado = `${total} copos de água`;
  }

  return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
