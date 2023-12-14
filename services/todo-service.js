class TodosService{
    
    baseUrl="http://localhost:8083/api/todos"
    async getAll(){

       let response= await fetch(this.baseUrl);
       let todos=await response.json();
       return todos;
    }
    async getById(id){

       let response= await fetch(`${this.baseUrl}/${id}`)
       let todo=await response.json();
       return todo;
    }

    async add(todo){
        // create a requestInfo object
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }

        return fetch(this.baseUrl, requestInfo).then(response => response.json())
    }
    async update(todo){

        let url = `${this.baseUrl}/${todo.id}`

        const requestInfo = {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }

        return fetch(url, requestInfo).then(response => response.json())
    }
    
    async delete(id){
        let url = `${this.baseUrl}/${id}`
        const requestInfo = {
            method: "DELETE"
        }

        return fetch(url, requestInfo)
    }

    async getUserTodos(id){

        // http://localhost:8083/api/todos/byuser/1

        let response= await fetch(`${this.baseUrl}/byuser/${id}`);
        let todos=await response.json();
        return todos;
    }
}