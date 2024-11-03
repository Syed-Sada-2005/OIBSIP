document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        addTask(taskValue);
        taskInput.value = '';
    }
});

function addTask(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    li.onclick = function() {
        li.classList.toggle('completed');
    };

    taskList.appendChild(li);
}
