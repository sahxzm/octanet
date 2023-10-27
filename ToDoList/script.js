function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
    if (taskText === "") {
        alert("Please enter a task.");
    } else {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        listItem.innerHTML = `<input type="checkbox" onclick="completeTask(this)"> ${taskText} <span onclick="deleteTask(this)">X</span>`;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function completeTask(checkbox) {
    var listItem = checkbox.parentElement;
    if (checkbox.checked) {
        listItem.style.textDecoration = "line-through";
    } else {
        listItem.style.textDecoration = "none";
    }
}

function deleteTask(span) {
    var listItem = span.parentElement;
    listItem.remove();
}
