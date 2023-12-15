let username;
let nameOfUser;
let password;
let confirmPassword;
let submitButton;
let userService;
document.addEventListener("DOMContentLoaded",()=>{
    userService=new UserService();
    username =document.getElementById("username");
    nameOfUser=document.getElementById("name");
 password=document.getElementById("password");
 confirmPassword=document.getElementById("confirmPassword");
 submitButton=document.getElementById("submitButton");
 submitButton.addEventListener("click",registerUser)
})

async function registerUser(event){
    event.preventDefault();
    console.log(password.value)
    console.log(confirmPassword.value)
    if(password.value===confirmPassword.value++){

        let user={
    
            "name":nameOfUser.value,
            "username": username.value,
            "password": password.value
            }
            console.log("User registered:", user);
         let newUser=  await userService.add(user);
         console.log(newUser);
    }
    else{

        console.log("Passwords do not match. Please try again.");
    }

   
}
