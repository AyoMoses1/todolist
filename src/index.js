import './style.css';

const listPlaceholder = document.querySelector('.list__placeholder');

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

const displayTasks = () => {
  array.forEach((arr) => {
    const task = document.createElement('li');
    task.innerHTML = `
                     <div>
                      <input type="checkbox" id="check" name="task_check">
                      <label for="task_check">${arr.description}</label>
                     </div>
                      <i class="fa-solid fa-ellipsis-vertical"></i>  
                    `;
    listPlaceholder.appendChild(task);
  });
};

displayTasks();