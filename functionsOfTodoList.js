let TodoItemCount = 1;

function addTodoItem()  {
  const todoInputText = document.getElementById('todoInputText').value;
  const todoItem = document.createElement('li');
  const textNode = document.createTextNode(todoInputText);

  todoItem.setAttribute("id", "todoItem" + TodoItemCount);
  todoItem.appendChild(textNode);
  todoItem.innerHTML += "<button type = 'button' onclick = 'removeTodoItem("+TodoItemCount+")')> 삭제 </button>";
  
  todoList = document.getElementById('todoList');
  todoList.appendChild(todoItem);
  TodoItemCount++;
}

function removeTodoItem(TodoItemCount) {
  const deleteTodoItem = document.getElementById('todoItem' + TodoItemCount);
  todoList.removeChild(deleteTodoItem);
}