// todo.js

// Fetch the todos from the API
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => displayTodos(todos));

// Function to display todos in the DOM
function displayTodos(todos) {
    const todoList = document.getElementById('todoList');
    let completedCount = 0;

    // Function to check when 5 tasks are completed and show alert
    function checkCompletedTodos() {
        return new Promise((resolve, reject) => {
            if (completedCount >= 5) {
                resolve("Congrats. 5 Tasks have been Successfully Completed");
            }
        });
    }

    // Create list items for each todo
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = false; // Mark if already completed
        //checkbox.disabled = todo.completed; // Disable if already completed

        // Event listener for checkbox
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                completedCount++;
            } else {
                completedCount--;
            }

            // Check if 5 tasks are completed using Promise
            checkCompletedTodos().then(message => {
                alert(message);
            }).catch(error => {
                console.error(error);
            });
        });

        li.appendChild(checkbox);
        todoList.appendChild(li);
    });
}
