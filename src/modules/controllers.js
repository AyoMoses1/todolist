const addTask = (task, arr) => {
  const newTask = { description: task, completed: false, index: arr.length + 1 };
  const updatedTasks = arr.concat([newTask]);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  window.location.reload();
};

const removeTask = (index, tasks) => {
  const updatedTasks = tasks.filter((task) => task.index !== index);
  const newTasks = updatedTasks.map((task, idx) => ({ ...task, index: idx + 1 }));
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  window.location.reload();
};

const editTasks = (tasks, index, value) => {
  const updatedTasks = tasks.map((task) => (task.index === index
    ? { ...task, description: value } : task));
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  window.location.reload();
};

export { addTask, removeTask, editTasks };