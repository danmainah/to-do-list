export default (ev) => {
    const getTasks = JSON.parse(localStorage.getItem('tasks'));
    const todoObject = getTasks.find(
      (todo) => todo.index === Number(ev.target.parentNode.id),
    );
    const index = getTasks.indexOf(todoObject);
    getTasks.splice(index,1)
    localStorage.setItem('tasks', JSON.stringify(getTasks));
  };