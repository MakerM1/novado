const taskInput = document.querySelector('.inputs__input-text');
const taskAddButton = document.querySelector('.inputs__add');
const taskList = document.querySelector('.tasks-list')
const toDo = document.getElementById('toDo')
const done = document.getElementById('done')

let toDoCount = 0

function addTask() {
    if (taskInput.value !== '') {
        toDoCount++;

        taskList.innerHTML += `
        <li class="tasks-list__task">
        <div class="task-list__task-left">
          <input type="checkbox" class="task-list__done" />
          <p>${taskInput.value}</p>
        </div>
        <i class="fa-regular fa-trash-can task-list__delete"></i>
      </li>
        `;
        toDo.innerHTML = toDoCount;
    }
}

taskAddButton.addEventListener('click', () => addTask())

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})