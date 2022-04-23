const MAX_TODO_ITEM_COUNT = 20;
const EMPTY_TODO_INPUT_TEXT = '';
let todoItemCount = 0;

function getTodoInputTextValue() {
  return document.getElementById('todoInputText').value;
}

function addTodoItem()  {
  const todoItem = document.createElement('li');
  const textNode = document.createTextNode(getTodoInputTextValue());

  todoItem.setAttribute("id", "todoItem" + todoItemCount);
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
  if (getTodoInputTextValue() === EMPTY_TODO_INPUT_TEXT){
    alert("입력창에 할 일을 입력하십시오.");
    return true;
  }
  return false;
}

function isBiggerThanMAX_TODO_ITEM_COUNT(){
  if (todoItemCount >= MAX_TODO_ITEM_COUNT){
    alert("할 일은 20개까지만 입력할 수 있습니다.");
    return true;
  }
  return false;
}

function handleAddButton(){
  if(!isEmptyTodoInputText() && !isBiggerThanMAX_TODO_ITEM_COUNT()){
    addTodoItem();
  }
}