const MAX_TODO_ITEM_COUNT = 20;
let todoItemCount = 0;

function getTodoInputTextValue() {
  return document.getElementById('todoInputText').value;
}

function addTodoItem()  {
  const todoItem = document.createElement('li');
  const textNode = document.createTextNode(getTodoInputTextValue());

  todoItem.setAttribute("id", 'todoItem' + todoItemCount);
  todoItem.appendChild(textNode);
  todoItem.innerHTML += "<button type = 'button' onclick = 'removeTodoItem("+todoItemCount+")')> 삭제 </button>";
  
  todoList = document.getElementById('todoList');
  todoList.appendChild(todoItem);
  todoItemCount++;
  
  document.getElementById('todoInputText').value = '';
}

function removeTodoItem(todoItemCount) {
  const deleteTodoItem = document.getElementById('todoItem' + todoItemCount);
  todoList.removeChild(deleteTodoItem);
}

function isEmptyTodoInputText(){
  if (getTodoInputTextValue() === ''){
    return true;
  }
  return false;
}

function isBiggerThanMaxTodoItemCount(){
  if (todoItemCount >= MAX_TODO_ITEM_COUNT){
    return true;
  }
  return false;
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