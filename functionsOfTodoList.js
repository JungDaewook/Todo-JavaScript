const MAX_TODO_ITEM_COUNT = 20;
let todoItemCount = 0;

function getTodoInputTextValue() {
  return document.getElementById('todoInputText').value;
}

function addTodoItem()  {
  const todoItem = document.createElement('li');
  const textNode = document.createTextNode(getTodoInputTextValue());
  let todoItemId = "todoItem" + todoItemCount;

  todoItem.setAttribute("id", todoItemId);
  todoItem.appendChild(textNode);
  todoItem.innerHTML += "<button type = 'button' onclick = 'removeTodoItem(\""+todoItemId+"\")'> 삭제 </button>";
  
  todoList = document.getElementById('todoList');
  todoList.appendChild(todoItem);
  todoItemCount++;
  
  document.getElementById('todoInputText').value = '';
}

function removeTodoItem(todoItemId) {
  const deleteTodoItem = document.getElementById(todoItemId);
  todoList.removeChild(deleteTodoItem);
  todoItemCount--;
}

function isEmptyTodoInputText(){
  return getTodoInputTextValue() === '';
}

function isBiggerThanMaxTodoItemCount(){
  return todoItemCount >= MAX_TODO_ITEM_COUNT;
}

function handleAddButton(){
  if(isEmptyTodoInputText()) {
    alert("입력창에 할 일을 입력하십시오.");
  }

  if(isBiggerThanMaxTodoItemCount()){
    alert("할 일은 20개까지만 입력할 수 있습니다.");
  }

  if(!isEmptyTodoInputText() && !isBiggerThanMaxTodoItemCount()){
    addTodoItem();
  }
}