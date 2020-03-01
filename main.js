//REST
//serve para pegar o resto das propriedades

const usuario = {
    nome: "Chris",
    idade: 20,
    empresa: "google"
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

//////////////////////////////////////////////////
const arr = [1,2,3,4,5];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//////////////////////////////////////////////////

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1,2,3,4,5,6,7,8,9));

//SPREAD
//repassa as informações de um array ou objeto para outra estrutura de dados

const arr1 = [1,2,3];
const arr2 = [4,5,6];

    const arr3 = [ ...arr1, ...arr2 ];
    console.log(arr3);
/////////////////////////////////////////////////////////////

const usuario2 = {
    nome: "Cecília",
    idade: 10,
    empresa: "YouTube"
};

const usuario3 = {...usuario2, nome: "Gabriel"};
console.log(usuario3)

