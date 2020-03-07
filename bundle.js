"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//  EX 01  //////////////////////////////////////////////////////////////
// class Usuario{
//     constructor(email, senha){
//         this.email = email;
//         this.senha = senha;
//     }
//     isAdmin(){
//         return this.admin === true;
//     }
// }
// class Admin extends Usuario{
//     constructor(email, senha){
//         super(email, senha);
//         this.admin = true;
//     }
// }
// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true
////////////////////////////////////////////////////
//  EX 02  //////////////////////////////////////////////////////////////
// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
//     ];
//     //map//
//      const idades = usuarios.map( usuario => usuario.idade);
//          console.log(idades);
//     //filter//
//      const usu = usuarios.filter( usuario => usuario.empresa === "Rocketseat"
//      && usuario.idade > 18 
//      );
//      console.log(usu);
//     //find//
//      const usu2 = usuarios.find(usuario => usuario.empresa === "Google");
//      console.log(usu2);
//     //multiplicação//
//      const usu3 = usuarios
//      .map( usuario => ({ ...usuario, idade: usuario.idade * 2}))
//      .filter( usuario => usuario.idade <=50);
//      console.log(usu3);
//  EX 03  ////////////////////////////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 5];
// const arrr = arr.map((item) => item + 10);
// console.log(arrr);
// ////////
// const usuario = { nome: "Diego", idade: 23 };
// const mostraIdade = usuario => usuario.idade;
// console.log(mostraIdade(usuario));
// ////////
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({
//     nome,
//     idade
// });
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
// ////////
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//     return resolve();
//     })
//     }
// const promisse = () => new Promisse((resolve, reject) => resolve());
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//     return resolve();
//     })
//     }
// EX 04 ////////////////////////////////////////////////////////////////
//    const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
//     };
//    const {nome, endereco: { cidade, estado }} = empresa;
//     console.log(nome); // Rocketseat
//     console.log(cidade); // Rio do Sul
//     console.log(estado); // SC
//     ////////
//     function mostraInfo({ nome, idade }) {
//         return `${nome} tem ${idade} anos.`;
//     }
//       console.log(mostraInfo({ nome: "Diego", idade: 23 }));
// EX 05 ////////////////////////////////////////////////////////////////
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]

function soma() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (a, b) {
    return a + b;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9)); ///////

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: "Gabriel"
});

var usuario3 = _objectSpread({}, usuario, {
  endereco: _objectSpread({}, usuario.endereco, {
    cidade: "Lontras"
  })
});

console.log(usuario2);
console.log(usuario3);
