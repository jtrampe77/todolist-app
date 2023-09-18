const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const deleteTaskButton = document.getElementById('delete');

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);

function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText == ""){
        alert("Please enter a task");
        return;
    }

    const taskItem = document.createElement('li')

    taskItem.innerHTML = `
    ${taskText}
    <button id="delete">Delete</Delete>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";

}

function deleteTask(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
}
