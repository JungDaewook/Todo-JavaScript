const MAX_TODO_ITEM_COUNT = 20;
const EMPTY_TODO_INPUT_TEXT = '';
let TODO_ITEM_COUNT = 0;

function getTodoInputTextValue() {
  return document.getElementById('todoInputText').value;
}

function addTodoItem()  {
  const todoItem = document.createElement('li');
  const textNode = document.createTextNode(getTodoInputTextValue());

  /*if(isEmptyTodoInputText()){
    return;
  }

  if (isBiggerThanMAX_TODO_ITEM_COUNT()){
    return ;
  }*/

  todoItem.setAttribute("id", "todoItem" + TODO_ITEM_COUNT);
  todoItem.appendChild(textNode);
  todoItem.innerHTML += "<button type = 'button' onclick = 'removeTodoItem("+TODO_ITEM_COUNT+")')> 삭제 </button>";
  
  todoList = document.getElementById('todoList');
  todoList.appendChild(todoItem);
  TODO_ITEM_COUNT++;
  
  document.getElementById('todoInputText').value = '';
}

function removeTodoItem(TODO_ITEM_COUNT) {
  const deleteTodoItem = document.getElementById('todoItem' + TODO_ITEM_COUNT);
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
  if (TODO_ITEM_COUNT >= MAX_TODO_ITEM_COUNT){
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