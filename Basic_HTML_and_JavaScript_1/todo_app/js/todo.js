function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";

    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

function completeTask(e) {
    var todos = get_todos();
    let elem = e['target'];
    var id = elem['children'][0]['id'];
    elem.innerText = '&#9745;' + ' ' + elem.innerText;
    todos[id] = elem.innerText;

    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

function clearAll() {
    localStorage.clear();
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    
    for (var i = 0; i < todos.length; i++) {
        html += '<li ondblclick="completeTask(event)">' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '<ul>';
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener('click', remove);
    }
}


document.getElementById('add').addEventListener('click', add);


show();