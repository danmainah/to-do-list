export default (tasks) => {
    tasks.push({
      description: addtask.value,
      isCompleted: false,
      index: tasks.length + 1,
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };