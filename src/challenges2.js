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

let teste = [];

console.log(techList(teste, 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
