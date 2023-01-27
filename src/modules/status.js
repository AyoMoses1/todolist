const statusUpdate = (index, instance) => {
  const todos = instance.tasks;
  const newArray = todos.map((task) => (task.index === index
    ? { ...task, completed: !task.completed }
    : task));
  localStorage.setItem('tasks', JSON.stringify(newArray));
  instance.render();
};

const clearCompleted = (array, instance) => {
  const completedTasks = array.filter((arr) => arr.completed === false);
  const updateTasks = completedTasks.map((task, idx) => ({ ...task, index: idx + 1 }));
  localStorage.setItem('tasks', JSON.stringify(updateTasks));
  instance.render();
};

export { statusUpdate, clearCompleted };