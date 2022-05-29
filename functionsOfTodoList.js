const MAX_TODO_ITEM_COUNT = 20;
let todoItemCount = 0;
let isTodoListEmpty = true;
let beforeStrikeTodoItem = "";

function getTodoInputTextValue() {
  return document.getElementById('todoInputText').value;
}

function addTodoItem()  {
  const todoItem = document.createElement('li');
  const textNode = document.createTextNode(getTodoInputTextValue());
  let todoItemId = "todoItem" + todoItemCount;

  todoItem.setAttribute("id", todoItemId);
  todoItem.appendChild(textNode);
  todoItem.innerHTML += "&nbsp; <input type = 'button' id = 'strikeButton' onclick = 'strikeTodoItem(\""+todoItemId+"\")' value = '완료'/> <input type = 'button' onclick = 'removeTodoItem(\""+todoItemId+"\")' value = '삭제'/>";

  todoList = document.getElementById('todoList');
  todoList.appendChild(todoItem);
  todoItemCount++;
  
  document.getElementById('todoInputText').value = '';

  isTodoListEmpty = false;
}

function strikeTodoItem(todoItemId) {
  const strikeTodoItem = document.getElementById(todoItemId);
  //const clickStrikeButton = document.getElementById('strikeButton');

  beforeStrikeTodoItem = strikeTodoItem.innerHTML ;
  //clickStrikeButton.value = "취소";
  //clickStrikeButton.setAttribute("onclick", 'cancelStrikeTodoItem(\''+todoItemId+'\')');

  strikeTodoItem.innerHTML = "<strike>" + strikeTodoItem.innerText + "</strike> <input type = 'button' id = 'strikeButton' onclick = 'cancelStrikeTodoItem(\""+todoItemId+"\")' value = '취소'/> <input type = 'button' onclick = 'removeTodoItem(\""+todoItemId+"\")' value = '삭제'/>";
}

function cancelStrikeTodoItem(todoItemId) {
  const cancelStrikeTodoItem = document.getElementById(todoItemId);
  const clickCancelStrikeButton = document.getElementById('strikeButton');
  
  clickCancelStrikeButton.value = "완료";
  clickCancelStrikeButton.setAttribute("onclick", 'strikeTodoItem(\''+todoItemId+'\')');
  
  cancelStrikeTodoItem.innerHTML = beforeStrikeTodoItem;
}

function removeTodoItem(todoItemId) {
  const deleteTodoItem = document.getElementById(todoItemId);
  todoList.removeChild(deleteTodoItem);
  todoItemCount--;

  if(todoItemCount === 0){
    isTodoListEmpty = true;
  }
}

function removeAllTodoItem() {

  if(isTodoListEmpty){
    alert("삭제할 리스트가 없습니다.");
    return;
  }

  todoList = document.getElementById('todoList');
  todoList.innerHTML = '';
  todoItemCount = 0;
  isTodoListEmpty = true;
}

function handleAddButton(){
  const isEmptyTodoInputTextValue = getTodoInputTextValue() === '';
  const isMaximumTodoInputCount = todoItemCount >= MAX_TODO_ITEM_COUNT;

  if(isEmptyTodoInputTextValue) {
    alert("입력창에 할 일을 입력하십시오.");
  }

  if(isMaximumTodoInputCount){
    alert("할 일은 20개까지만 입력할 수 있습니다.");
  }

  if(!isEmptyTodoInputTextValue && !isMaximumTodoInputCount){
    addTodoItem();
  }
}