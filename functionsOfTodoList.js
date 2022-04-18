let TodoItemCount = 0;

function getTodoInputTextValue() {
  return document.getElementById('todoInputText').value;
}

function addTodoItem()  {
  const todoItem = document.createElement('li');
  const textNode = document.createTextNode(getTodoInputTextValue());

  if (TodoItemCount >= 20){
    return ;
  }

  if(getTodoInputTextValue() === ''){
    return;
  }

  todoItem.setAttribute("id", "todoItem" + TodoItemCount);
  todoItem.appendChild(textNode);
  todoItem.innerHTML += "<button type = 'button' onclick = 'removeTodoItem("+TodoItemCount+")')> 삭제 </button>";
  
  todoList = document.getElementById('todoList');
  todoList.appendChild(todoItem);
  TodoItemCount++;
  
  document.getElementById('todoInputText').value = '';
}

function removeTodoItem(TodoItemCount) {
  const deleteTodoItem = document.getElementById('todoItem' + TodoItemCount);
  todoList.removeChild(deleteTodoItem);
}