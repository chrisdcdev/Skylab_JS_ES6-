// const user = { nome: "Chris"};
// user.nome = "Diego"; //fazendo mutação com uma constante
// console.log(user)

function teste(x){

    let y = 5;

    if(x > y){
        console.log(x,y)

    }
}

    y=4; //não pode reatribuir o valor da variável y, porque a 
         //variável y está dentro do escopo da classe "teste"

teste(10)
