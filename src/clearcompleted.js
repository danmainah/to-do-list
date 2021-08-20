export default () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  const itemDeleted = data.filter((elem) => elem.isCompleted);
  itemDeleted.forEach((elem) => {
    const index = data.indexOf(elem);
    data.splice(index, 1);
  });
  localStorage.setItem('tasks', JSON.stringify(data));
};
