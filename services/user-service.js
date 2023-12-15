class UserService{
    baseUrl="http://localhost:8083/api/users"

    async getAll(){

        let response= await fetch(this.baseUrl);
        let users=await response.json();
        return users;
     }

     async add(user){
        // create a requestInfo object
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }

        return fetch(this.baseUrl, requestInfo)
        // .then(response => response.json())
    }
}