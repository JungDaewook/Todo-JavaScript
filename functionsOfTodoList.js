let todoItemCount = 1;

function addTodoItem()  {
  const todoInputText = document.getElementById('todoInputText').value;
  const todoItem = document.createElement('li');
  const textNode = document.createTextNode(todoInputText);
  todoItem.setAttribute("id", "todoItem" + todoItemCount);
  todoItem.appendChild(textNode);
  todoItem.innerHTML += "<button type = 'button' onclick = 'removeTodoItem("+todoItemCount+")')> 삭제 </button>";
  todoList = document.getElementById('todoList');
  todoList.appendChild(todoItem);
  todoItemCount++;
}

function removeTodoItem(todoItemCount) {
  const DeleteTodoItem = document.getElementById('todoItem' + todoItemCount);
  todoList.removeChild(DeleteTodoItem);
}