const input = document.querySelector('#input');
const tombol = document.querySelector('#tombol');
const todoList = document.querySelector('.todo-list');


tombol.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);

function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newtodo = document.createElement('li');
    newtodo.innerText = input.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);

    const done = document.createElement('button');
    done.innerHTML = 'done';
    done.classList.add("done-btn");
    todoDiv.appendChild(done);

    const delet = document.createElement('button');
    delet.innerHTML = 'delete';
    delet.classList.add("delet-btn");
    todoDiv.appendChild(delet);

    const edit = document.createElement('button');
    edit.innerHTML = 'edit';
    edit.classList.add("edit-btn");
    todoDiv.appendChild(edit);

    todoList.appendChild(todoDiv);

    input.value = "";
}

function deleteTodo(e) {
    const item = e.target;
    if (item.classList[0] === "delet-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === "done-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("selesai");
    }

    // if (item.classList[0] === "edit-btn") {
    //     const todo = item;
    //     let ed = prompt("edit here ");
    //     todo= ed;
    // }
}