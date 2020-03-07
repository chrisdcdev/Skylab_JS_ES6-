"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//  EX 01  ////////////////////////////////////////
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
//  EX 02  //////////////////////////////////////////////
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //map//

var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idades); //filter//

var usu = usuarios.filter(function (usuario) {
  return usuario.empresa === "Rocketseat" && usuario.idade > 18;
});
console.log(usu); //find//

var usu2 = usuarios.find(function (usuario) {
  return usuario.empresa === "Google";
});
console.log(usu2); //multiplicação//

var usu3 = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log(usu3);
