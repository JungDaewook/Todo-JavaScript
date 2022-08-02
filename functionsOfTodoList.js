const MAX_TODO_ITEM_COUNT = 20;
let todoItemCount = 0;
let todoItemIdIndex = 0;
let isTodoListEmpty = true;
let todoItemId = returningTodoItemId();

function getTodoInputTextValue() {
  return document.getElementById('todoInputText').value;
}

function textForInnerHtmlOfStrikeButton(todoItemId) {
  return "<input type = 'button' id = 'strikeButton' onclick = 'strikeTodoItem(\""+todoItemId+"\")' value = '완료'/>";
}

function textForInnerHtmlOfCancelStrikeButton(todoItemId) {
  return "<input type = 'button' id = 'strikeButton' onclick = 'cancelStrikeTodoItem(\""+todoItemId+"\")' value = '취소'/>";
}

function textForInnerHtmlOfRemoveButton(todoItemId) {
  return "<input type = 'button' id = 'removeButton' onclick = 'removeTodoItem(\""+todoItemId+"\")' value = '삭제'/>"; 
}

function wrapInnerHtmlTextOfButtonsWithDivTag(textForInnerHtml) {
  return "<div class = 'strikeAndRemoveButton'>" + textForInnerHtml + "</div>";
}

function addTodoItem()  {
  const todoItem = document.createElement('li');
  const textNode = document.createTextNode(getTodoInputTextValue());
  let todoItemId = "todoItem" + todoItemIdIndex;

  const innerHtmlTextOfStrikeButton = textForInnerHtmlOfStrikeButton(todoItemId);
  const innerHtmlTextOfRemoveButton = textForInnerHtmlOfRemoveButton(todoItemId);

  todoItem.setAttribute("id", todoItemId);
  todoItem.appendChild(textNode);
  todoItem.innerHTML += wrapInnerHtmlTextOfButtonsWithDivTag(innerHtmlTextOfStrikeButton + innerHtmlTextOfRemoveButton);

  todoList = document.getElementById('todoList');
  todoList.appendChild(todoItem);
  todoItemCount++;
  todoItemIdIndex++;
  
  document.getElementById('todoInputText').value = '';

  isTodoListEmpty = false;
}

function strikeTodoItem(todoItemId) {
  const strikeTodoItem = document.getElementById(todoItemId);

  const innerHtmlTextOfCancelStrikeButton = textForInnerHtmlOfCancelStrikeButton(todoItemId);
  const innerHtmlTextOfRemoveButton = textForInnerHtmlOfRemoveButton(todoItemId);

  strikeTodoItem.innerHTML = strikeTodoItem.innerText.strike();
  strikeTodoItem.innerHTML += wrapInnerHtmlTextOfButtonsWithDivTag(innerHtmlTextOfCancelStrikeButton + innerHtmlTextOfRemoveButton);
}

function cancelStrikeTodoItem(todoItemId) {
  const cancelStrikeTodoItem = document.getElementById(todoItemId);

  const innerHtmlTextOfStrikeButton = textForInnerHtmlOfStrikeButton(todoItemId);
  const innerHtmlTextOfRemoveButton = textForInnerHtmlOfRemoveButton(todoItemId);
  
  cancelStrikeTodoItem.innerHTML = cancelStrikeTodoItem.innerText;
  cancelStrikeTodoItem.innerHTML += wrapInnerHtmlTextOfButtonsWithDivTag(innerHtmlTextOfStrikeButton + innerHtmlTextOfRemoveButton);
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