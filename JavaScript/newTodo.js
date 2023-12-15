let todoService;
let userService;
let categoryService;
let selectuser;
let selectCategory;
let todoDescription;
let todoDeadline;
let addTodoButton;
let priority;
document.addEventListener("DOMContentLoaded", () => {
    todoService = new TodosService();
    userService = new UserService();
    categoryService = new CategoryService();
    selectuser = document.getElementById("selectUser");

    selectCategory = document.getElementById("selectCategory");
    todoDescription = document.getElementById("todoDescription");
    todoDeadline = document.getElementById("todoDeadline");
    priority = document.getElementById("selectPriority")
    loadUsers();
    loadCategories();
    addTodoButton = document.getElementById("addTodoButton");
    addTodoButton.addEventListener("click", addTodo)
})
async function loadUsers() {
    let users = await userService.getAll();
    console.log(users)
    for (let user of users) {
        const option = new Option(user.name, user.id);
        selectuser.appendChild(option)
    }
}
async function loadCategories() {
    let categories = await categoryService.getAll();
    console.log(categories)
    for (let category of categories) {
        const option = new Option(category.name, category.name);
        selectCategory.appendChild(option)
    }
}


async function addTodo(event) {
    event.preventDefault();

    let todo = {
        userid: selectuser.value,
        category: selectCategory.value,
        description: todoDescription.value,
        deadline: todoDeadline.value,
        priority: priority.value


    }
    console.log(todo)
    const newTodo = await todoService.add(todo)
    console.log(newTodo);

}