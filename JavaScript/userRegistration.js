let username;
let nameOfUser;
let password;
let confirmPassword;
let submitButton;
let userService;
document.addEventListener("DOMContentLoaded", () => {
    userService = new UserService();
    username = document.getElementById("username");
    nameOfUser = document.getElementById("name");
    password = document.getElementById("password");
    confirmPassword = document.getElementById("confirmPassword");
    submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", registerUser)
})

async function registerUser(event) {
    event.preventDefault();
    console.log(password.value)
    console.log(confirmPassword.value)

    if (password.value === confirmPassword.value) {
        let user = {
            "name": nameOfUser.value,
            "username": username.value,
            "password": password.value
        };

        try {
            // Call the add method of the UserService
            let response = await userService.add(user);

            // console.log(response)
            if (response.status === 403) {
                console.log("Username is already in use. Please choose a different username.");
                // Display an error message to the user indicating the username is already in use
            } else if (response.error) {
                console.error("Error:", response.error);
                // Display an error message to the user indicating a general error occurred
            } else {
                newuser = await response.json();
                console.log("User registered successfully:", newuser);
                // Display a success message to the user
            }
        } catch (error) {
            console.error("Error registering user:", error);
            // Display an error message to the user indicating a general error occurred
        }
    } else {
        console.log("Passwords do not match. Please try again.");
        // Display an error message to the user indicating passwords do not match
    }

}
