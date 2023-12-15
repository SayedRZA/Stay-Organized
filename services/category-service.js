class CategoryService{
    baseUrl="http://localhost:8083/api/categories"
    async getAll(){

       let response= await fetch(this.baseUrl);
       let todos=await response.json();
       return todos;
    }
}