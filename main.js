class list{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends list{
    constructor(){
        super();//chamando o constructor da classe pai
        this.usuario = "Chris";
    }

    exibeUser(){
        console.log(this.usuario);
    }
}

const minhaLista = new TodoList(); //instanciando a classe
document.querySelector("#novoTodo").onclick = function(){
    minhaLista.add("oi");
}

minhaLista.exibeUser();