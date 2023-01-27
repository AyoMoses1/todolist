
import { addTask, removeTask } from "./controllers";
import { listPlaceholder, inputForm, deleteBtns } from "./selectors";

class Tasks{
  constructor(){
    this.tasks = []
  }

  createTask(task) {
    addTask(task, this.tasks)
    this.render()
  }

  deleteTask(index){
    removeTask(index, this.tasks)
    this.render()
  }

  updateTask(){
    console.log("task updated")
  }

  render(){
    listPlaceholder.innerHTML=''
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
    this.tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.setAttribute('data-index',task.index)
      taskItem.innerHTML = `
                      <div>
                        <input type="checkbox" id="check" name="task_check">
                        <label for="task_check" contenteditable id="label-${task.index}">${task.description}</label>
                      </div>
                        <i class="fa-solid fa-ellipsis-vertical del-icon"></i>  
                      `;
      listPlaceholder.appendChild(taskItem);
      const delIcon = taskItem.querySelector('.del-icon')
      delIcon.addEventListener('click', (e) => {
        const index = Number(e.target.parentNode.getAttribute('data-index'))
        todos.deleteTask(index)
      })
    });

  }
}






const todos = new Tasks()

window.onload = todos.render()

const lab = document.getElementById(`label-1`)

lab.addEventListener('input', (e) => {
  lab.parentNode.parentNode.classList.add('yellow')
  console.log(e.target.outerText)
})


inputForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const task = inputForm.querySelector('.add_input').value
  inputForm.reset()
  todos.createTask(task)
})





