/* eslint-disable import/prefer-default-export, no-undef */
const getTasks = JSON.parse(localStorage.getItem('tasks'));

export const checkbox = () => {
  list.addEventListener('change', (ev) => {
    const todoObject = getTasks.find(
      (todo) => todo.index === Number(ev.target.parentNode.id),
    );
    const index = getTasks.indexOf(todoObject);
    if (!getTasks[index].isCompleted) {
      getTasks[index].isCompleted = true;
      ev.target.parentNode.children[1].classList.add('checked');
      localStorage.setItem('tasks', JSON.stringify(getTasks));
    } else {
      getTasks[index].isCompleted = false;

      ev.target.parentNode.children[1].classList.remove('checked');
      localStorage.setItem('tasks', JSON.stringify(getTasks));
    }
  });
};
/* eslint-enable import/prefer-default-export, no-undef */