function addTask() {
    var taskInput = document.getElementById("taskInput").value;

    if (taskInput.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput}</span>
        <button onclick="toggleDone(this)">Done</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
}

function toggleDone(button) {
    var taskItem = button.parentNode;
    taskItem.classList.toggle("done");
}

function deleteTask(button) {
    var taskItem = button.parentNode;
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskItem);
}