import { addTask, editTasks, removeTask } from './controllers.js';
import { listPlaceholder, inputForm } from './selectors.js';

class Tasks {
  constructor() {
    this.tasks = [];
  }

  createTask(task) {
    addTask(task, this.tasks);

    this.render();
  }

  deleteTask(index) {
    removeTask(index, this.tasks);
    this.render();
  }

  updateTask(index, value) {
    editTasks(this.tasks, index, value);
    this.render();
  }

  render() {
    listPlaceholder.innerHTML = '';
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.setAttribute('data-index', task.index);
      taskItem.innerHTML = `
                      <div>
                        <input type="checkbox" id="check" name="task_check">
                        <input type="text" class="task-input" value=${task.description}>
                      </div>
                        <i class="fa-solid fa-ellipsis-vertical del-icon"></i>  
                      `;
      listPlaceholder.appendChild(taskItem);
      const delIcon = taskItem.querySelector('.del-icon');
      delIcon.addEventListener('click', (e) => {
        const index = Number(e.target.parentNode.getAttribute('data-index'));
        this.deleteTask(index);
      });
    });
  }
}

const todos = new Tasks();

window.onload = todos.render();

const inputs = document.querySelectorAll('.task-input');

inputs.forEach((input) => {
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const index = Number(input.parentNode.parentNode.getAttribute('data-index'));
      todos.updateTask(index, input.value);
    }
  });
});

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = inputForm.querySelector('.add_input').value;
  inputForm.reset();
  todos.createTask(task);
});
