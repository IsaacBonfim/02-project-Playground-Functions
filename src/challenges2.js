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

function validacaoRepeticao(array) {
  let resultado = true;
  let repeticao = 0;

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        repeticao += 1;
      }
    }
    if (repeticao >= 3) {
      resultado = false;
      break;
    }

    repeticao = 0;
  }

  return resultado;
}

function PhoneNumber(array) {
  let number = '';

  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      number += `(${array[i]}`;
    } else if (i === 1) {
      number += `${array[i]}) `;
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
