function addTodoItem()  {
    const todoInputText = document.getElementById('todoInputText').value;
    const todoItem = document.createElement('li');
    const textNode = document.createTextNode(todoInputText);
    todoItem.appendChild(textNode);
    todoList = document.getElementById('todoList');
    todoList.appendChild(todoItem);
  }