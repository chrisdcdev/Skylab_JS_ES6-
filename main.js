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
}

const minhaLista = new TodoList(); //instanciando a classe
document.querySelector("#novoTodo").onclick = function(){
    minhaLista.add("oi");
}