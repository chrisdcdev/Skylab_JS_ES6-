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

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

    //map//
     const idades = usuarios.map( usuario => usuario.idade);
         console.log(idades);

    //filter//
     const usu = usuarios.filter( usuario => usuario.empresa === "Rocketseat"
     && usuario.idade > 18 
     );

     console.log(usu);

    //find//
     const usu2 = usuarios.find(usuario => usuario.empresa === "Google");
     console.log(usu2);

    //multiplicação//
     const usu3 = usuarios
     .map( usuario => ({ ...usuario, idade: usuario.idade * 2}))
     .filter( usuario => usuario.idade <=50);

     console.log(usu3);
     
