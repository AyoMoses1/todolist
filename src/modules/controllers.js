
const addTask = (task, arr) => {
  const newTask = {description : task, completed:false, index : arr.length+1}
  const updatedTasks = arr.concat([newTask])
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));

}

const removeTask = (index, tasks) => {
  const updatedTasks = tasks.filter((task) => task.index !== index)
  const newTasks = updatedTasks.map((task, idx) => {
    return {...task, index :idx+1}
  })
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}


export {addTask, removeTask}