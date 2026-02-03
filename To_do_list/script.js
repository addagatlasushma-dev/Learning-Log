// JavaScript Code for To-Do List

// Step 1: Get elements from the HTML page
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Step 2: Create a function to add a new task
function addTask() {
    // Get the text that user typed
    const taskText = taskInput.value.trim();
    
    // Check if the input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return; // Stop the function here
    }

    // Create a new list item element
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    // Create a span element for the task text
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;
    
    // Make task text clickable to mark as complete
    taskSpan.onclick = function() {
        taskItem.classList.toggle('completed');
    };

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    
    // Make delete button work
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
    };

    // Put the text and button inside the task item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);

    // Add the task item to the list on the page
    taskList.appendChild(taskItem);

    // Clear the input box
    taskInput.value = '';
}

// Step 3: Make the "Add Task" button work
addButton.addEventListener('click', addTask);

// Step 4: Allow pressing Enter key to add task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
