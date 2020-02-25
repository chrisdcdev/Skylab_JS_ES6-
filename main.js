class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push("***"); //adicionando "***" no array "todos"
        console.log(this.todos);
    }
}

const minhaLista = new TodoList(); //instanciando a classe
document.querySelector("#novoTodo").onclick = function(){
    minhaLista.addTodo();
}