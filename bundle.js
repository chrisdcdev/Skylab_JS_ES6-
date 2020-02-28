"use strict";

//////////////////////////////////////////////////////
//USANDO O map PARA PERCORRER O VETOR E RETORNAR UMA INFORMAÇÃO
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item * 0;
});
console.log(newArr);
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr2 = arr2.map(function (item, index) {
  return item * index;
});
console.log(newArr2); ///////////////////////////////////////////////////////
//USANDO O reduce para consumir todo o vetor e retornar uma única variável

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr3 = arr3.reduce(function (total, next) {
  return total + next;
});
console.log(newArr3); ///////////////////////////////////////////////////////
//USANDO O filter PARA FILTRAR UM ARRAY

var arr4 = [1, 2, 3, 4, 5, 6];
var newArr4 = arr4.filter(function (item) {
  return item % 2 === 0;
});
console.log(newArr4); /////////////////////////////////////////////////////
//USANDO O find PARA PROCURAR UM ELEMENTO DENTRO DO ARRAY

var arr5 = [1, 2, 3, 4, 5];
var newArr5 = arr5.find(function (item) {
  return item === 7;
});
console.log(newArr5);
