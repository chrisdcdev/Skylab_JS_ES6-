// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map(function(item){
//  return item * 0;
// });
// console.log(newArr);

////////////////////////////////////////////////////////
//USANDO arrow function

const arr = [1,2,3,4,5];
const newArr = arr.map(item => item * 2);
console.log(newArr);
///////////////////////////////////////////////////////

const test = () => ["array", "ARRAY"];
console.log(test());

const test2 = () => ({nome : "Chris"});
console.log(test2());
