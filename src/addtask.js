/* eslint-disable  no-undef, comma-dangle */
export default (tasks) => {
  tasks.push({
    description: addtask.value,
    isCompleted: false,
    index: tasks.length + 1,
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
/* eslint-enable  no-undef, comma-dangle */