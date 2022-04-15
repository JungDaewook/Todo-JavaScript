let TodoItemCount = 0;

function addTodoItem()  {
  const todoInputTextValue = document.getElementById('todoInputText').value;
  const todoItem = document.createElement('li');
  const textNode = document.createTextNode(todoInputTextValue);

  if (TodoItemCount >=20){
    return ;
  }

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