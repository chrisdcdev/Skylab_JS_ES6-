"use strict";

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map(function(item){
//  return item * 0;
// });
// console.log(newArr);
////////////////////////////////////////////////////////
//USANDO arrow function
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); ///////////////////////////////////////////////////////

var test = function test() {
  return ["array", "ARRAY"];
};

console.log(test());

var test2 = function test2() {
  return {
    nome: "Chris"
  };
};

console.log(test2());
