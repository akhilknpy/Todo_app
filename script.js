// app.js

// Hardcoded login credentials
const validUsername = "admin";
const validPassword = "12345";

// Function to handle the login
function login(username, password, callback) {
    if (username === validUsername && password === validPassword) {
        callback(true);  // If login is successful, execute the callback
    } else {
        callback(false); // If login fails, execute the callback with false
    }
}

// Callback function to handle redirection
function handleLogin(isValid) {
    if (isValid) {
        // Redirect to main page if login is valid
        window.location.href = "mainPage.html";
    } else {
        alert("Invalid login credentials!");
    }
}

// Attaching the form submit event
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting the default way

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Call the login function and pass the callback
    login(username, password, handleLogin);
});

