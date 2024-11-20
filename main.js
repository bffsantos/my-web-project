function addNewTask(){
    var list = document.getElementById("list");
    var textName = document.getElementById("task_name");
    var listItem = document.createElement("li");

    const textElement = document.createTextNode(textName.value);

    listItem.appendChild(textElement);
    list.appendChild(listItem);

    textName.value = "";
    textName.focus();
}