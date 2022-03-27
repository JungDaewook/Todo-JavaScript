function addList()  {
    const addValue = document.getElementById('addValue').value;
    const li = document.createElement('li');
    li.setAttribute('id',addValue);
    const textNode = document.createTextNode(addValue);
    li.appendChild(textNode);
    document.getElementById('list').appendChild(li);
  }