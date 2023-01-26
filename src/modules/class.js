
import { listPlaceholder } from "./selectors";

class Tasks{
  constructor(){
    this.tasks = []
  }

  createTask(){
    console.log("task created")
  }

  deleteTask(){
    console.log("task deleted")
  }

  updateTask(){
    console.log("task updated")
  }

  render(){
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [] 
    this.tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
                    <div>
                      <input type="checkbox" id="check" name="task_check">
                      <label for="task_check">${task.description}</label>
                    </div>
                      <i class="fa-solid fa-ellipsis-vertical"></i>  
                    `;
    listPlaceholder.appendChild(taskItem);
});

  }
}



const array = [
  {
    description: 'Watch Football',
    completed: false,
    index: 1,
  },
  {
    description: 'Play Video Games',
    completed: false,
    index: 2,
  },
  {
    description: 'Attend Church Service',
    completed: false,
    index: 3,
  },
  {
    description: 'Guys Hangout',
    completed: false,
    index: 4,
  },
  {
    description: 'Prepare Dinner',
    completed: false,
    index: 5,
  },
];


localStorage.setItem('tasks', JSON.stringify(array));


const tasks = new Tasks()

window.onload = tasks.render()
