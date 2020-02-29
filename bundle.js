"use strict";

var usuario = {
  nome: "Chris",
  idade: 20,
  endereco: {
    cidade: "Ocara",
    estado: "CE"
  }
}; //////////////////////////////////////////////
//DESESTRUTURAÇÃO

var nome = usuario.nome,
    idade = usuario.idade,
    estado = usuario.endereco.estado;
console.log(nome);
console.log(idade);
console.log(estado); ////////////////////////////////////////////////

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
