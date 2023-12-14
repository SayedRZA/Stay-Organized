class UserService{
    baseUrl="http://localhost:8083/api/users"

    async getAll(){

        let response= await fetch(this.baseUrl);
        let users=await response.json();
        return users;
     }
     
}