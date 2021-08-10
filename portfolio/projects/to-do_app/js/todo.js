/* This function gets the task from input */
function get_todos() {

    /* This creates an array of tasks that are input */
    var todos = new Array;

    /* This pulls the task that was saved in the web browser memory */
    var todos_str = localStorage.getItem('todo');

    /* If the input is not null, then JSON.pares will
    communicate with the web browser to make the task a JS object */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* This function adds the input task to the get_todos function array */
function add() {

    /* This takes the input task and creates a variable of it */
    var task = document.getElementById('task').value;

    var todos = get_todos();

    /* This adds a new task to the end of the array */
    todos.push(task);

    /* This converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/* This function removes a todo item from the array */
function remove() {

    /* This gets the ID attribute */
    var id = this.getAttribute('id');

    var todos = get_todos();

    /* This removes the element without leaving holes in the array */
    todos.splice(id, 1);

    /* This converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    
    /* This looks in the show() for how to display the removed item on the screen */
    show();

    return false;
} 

/* This function keeps the tasks permanently displayed on the screen */
function show() {

    /* This sets the task that was retrieved as a variable */
    var todos = get_todos();

    /* This sets up each task as an unordered list */
    var html = '<ul>';

    /* This displays a task to the list in the order that it is input */
    for (var i = 0; i < todos.length; i++) {
        
        /* This also displays the task as a list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';

    /* This displays the task as a list */
    document.getElementById('todos').innerHTML = html;
    
    /* This tells the browser how to display the todo
    array after an item has been removed */
    var buttons = document.getElementsByClassName('remove');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }   
}

/* This displays the input task when the 'Add Item' button is clicked */
document.getElementById('add').addEventListener('click', add);

/* This will keep the inputs displayed permanently on the screen */
show();