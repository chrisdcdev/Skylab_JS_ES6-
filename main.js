//////////////////////////////////////////////////////
//USANDO O map PARA PERCORRER O VETOR E RETORNAR UMA INFORMAÇÃO
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(item){
 return item * 0;
});
console.log(newArr);

const arr2 = [1,2,3,4,5,6,7,8,9];

const newArr2 = arr2.map(function(item, index){
return item * index;
})
console.log(newArr2);
///////////////////////////////////////////////////////
//USANDO O reduce para consumir todo o vetor e retornar uma única variável

const arr3 = [1,2,3,4,5,6,7,8,9];

const newArr3 = arr3.reduce(function(total, next){
    return total + next;
})
console.log(newArr3);

///////////////////////////////////////////////////////
//USANDO O filter PARA FILTRAR UM ARRAY

const arr4 = [1,2,3,4,5,6];
const newArr4 = arr4.filter(function(item){
    return item % 2 === 0;
})
console.log(newArr4);

/////////////////////////////////////////////////////
//USANDO O find PARA PROCURAR UM ELEMENTO DENTRO DO ARRAY
const arr5 = [1,2,3,4,5];
const newArr5 = arr5.find(function(item){
    return item === 7; 
})
console.log(newArr5);