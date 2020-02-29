const usuario = {
    nome: "Chris",
    idade: 20,
    endereco: {
        cidade: "Ocara",
        estado: "CE"
    }

}
//////////////////////////////////////////////
//DESESTRUTURAÇÃO

const { nome, idade, endereco:{ estado} } = usuario;
console.log(nome);
console.log(idade);
console.log(estado);
////////////////////////////////////////////////

function mostraNome( { nome , idade } ){
    console.log(nome, idade);
}
mostraNome(usuario);


