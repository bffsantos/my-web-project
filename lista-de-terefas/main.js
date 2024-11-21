function addNewTask(){
    var list = document.getElementById("list");
    var textNameInput = document.getElementById("task_name_input");
    var listItem = document.createElement("li");

    if(textNameInput.value.length <= 0){
        return alert("Digite uma tarefa válida!");
    }

    const textElement = document.createTextNode(textNameInput.value);

    listItem.appendChild(textElement);
    list.appendChild(listItem);

    textNameInput.value = "";
    textNameInput.focus();
}