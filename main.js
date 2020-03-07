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
  

   const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
    };

   const {nome, endereco: { cidade, estado }} = empresa;
    
    console.log(nome); // Rocketseat
    console.log(cidade); // Rio do Sul
    console.log(estado); // SC

    ////////

    function mostraInfo({ nome, idade }) {
        return `${nome} tem ${idade} anos.`;
    }
      console.log(mostraInfo({ nome: "Diego", idade: 23 }));


   // EX 05 ////////////////////////////////////////////////////////////////

        

     



     
