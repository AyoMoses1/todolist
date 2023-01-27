const addTask = (task, instance) => {
  const newTask = { description: task, completed: false, index: instance.tasks.length + 1 };
  const updatedTasks = instance.tasks.concat([newTask]);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  instance.render();
};

const removeTask = (index, instance) => {
  const updatedTasks = instance.tasks.filter((task) => task.index !== index);
  const newTasks = updatedTasks.map((task, idx) => ({ ...task, index: idx + 1 }));
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  instance.render();
};

const editTasks = (tasks, index, value) => {
  const updatedTasks = tasks.map((task) => (task.index === index
    ? { ...task, description: value } : task));
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  tasks.render();
};

export { addTask, removeTask, editTasks };