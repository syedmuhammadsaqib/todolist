var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");

    //Create li tag with text node
    var li =document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    //Create delete button
    var delBtn = document.createElement("button") 
    var delText=document.createTextNode("Delete")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)
    
    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")



    li.appendChild(delBtn)
    li.appendChild(editBtn)
    
    list.appendChild(li)

    todo_item.value = ""

console.log(li)

}
 
function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
   var val = e.parentNode.firstChild.nodeValue;
   var editValue = prompt("Enter edit value",val)
    
   e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll() {
list.innerHTML=""

}