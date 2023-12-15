let todoService;
let userService;
let selectuser;
document.addEventListener("DOMContentLoaded",()=>{
todoService=new TodosService();
userService=new UserService();
 selectuser=document.getElementById("selectUser");
loadUsers();
selectuser.addEventListener("change",displayUserTodos)
})
async function loadUsers(){
    let users=await userService.getAll();
    console.log(users)
    for(let user of users){
        const option =new Option(user.name,user.id);
        selectuser.appendChild(option)
    }
}

async function displayUserTodos(){
    
    let userTodos=await todoService.getUserTodos(selectuser.value);
    
    const todoRows = document.getElementById("todosRows")
    todoRows.innerHTML=""
    if(userTodos.length>1){

        userTodos.forEach(userTodo=>{

            displaytodo(userTodo)
        }
            
            )
    }
    else{

       let message= document.createElement("h5");
       message.innerText="User has No Todos😕"
        todoRows.appendChild(message)
    }
    
}

function displaytodo(todo){
    // todoRows.innerHTML=""
    const todoRows = document.getElementById("todosRows")

    const row = todoRows.insertRow(-1)
    const idCell = row.insertCell(0)
    idCell.innerText = todo.id
    const useridCell = row.insertCell(1)
    useridCell.innerText = todo.userid
    const categoryCell = row.insertCell(2)
    categoryCell.innerText = todo.category
    const descriptionCell = row.insertCell(3)
    descriptionCell.innerText = todo.description
    const deadlineCell = row.insertCell(4)
    deadlineCell.innerText = todo.deadline
    const priorityCell = row.insertCell(5)
    priorityCell.innerText = todo.priority
    const completedCell = row.insertCell(6)
    if(todo.completed){
        completedCell.innerText="✅"
    }
    else{
        completedCell.innerText="❌"
    }
    // completedCell.innerText = todo.completed
    const editCell = row.insertCell(7)
    const editButton = document.createElement("button")
    editButton.classList.add("btn")
    editButton.classList.add("btn-success")
    editButton.classList.add("m-1")
    editButton.innerText = "Edit"
    editCell.appendChild(editButton)
    
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("btn")
    deleteButton.classList.add("btn-danger")
    deleteButton.classList.add("m-1")
    deleteButton.innerText = "Delete"
    editCell.appendChild(deleteButton)

    // // delete and edit functions
    deleteButton.addEventListener("click", () => {

        // const isDeleteConfirmed = confirm(`You are about to delete ${todo.title}, do you want to continue?`)
        // if(isDeleteConfirmed)
        // {
        //     todoService.delete(todo.id)
                
        // }
    })

    editButton.addEventListener("click", () => {
        // location.href = `../editTodos.html?id=${todo.id}`
    })
}
