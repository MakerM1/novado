const taskInput = document.querySelector('.inputs__input-text');
const taskAddButton = document.querySelector('.inputs__add');
const taskList = document.querySelector('.tasks-list')
const toDo = document.getElementById('toDo')
const done = document.getElementById('done')

let toDoCount = 0
let doneCount = 0;

function addTask() {
    if (taskInput.value !== '') {
        toDoCount++;

        taskList.innerHTML += `
        <li class="tasks-list__task">
        <div class="task-list__task-left">
          <input type="checkbox" class="task-list__done check" onchange="checkTask(event)" />
          <p>${taskInput.value}</p>
        </div>
        <i class="fa-regular fa-trash-can task-list__delete" onclick="deleteTask(this)"></i>
      </li>
        `;
        toDo.innerHTML = toDoCount;
        done.innerHTML = `${doneCount} / ${toDoCount}`
    }
}

function checkTask(e) {
  console.log('hi');
  if (e.target.checked === true) {
    doneCount++
    done.innerHTML = `${doneCount} / ${toDoCount}`
  } else {
    doneCount--
    done.innerHTML = `${doneCount} / ${toDoCount}`
  }
}

function deleteTask(item) {
  item.parentElement.style.display = 'none'
  toDoCount--
  if (item.parentElement.querySelector('.check').checked) {
    doneCount--
  }
  toDo.innerHTML = toDoCount;
  done.innerHTML = `${doneCount} / ${toDoCount}`

}

taskAddButton.addEventListener('click', () => addTask())

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})

