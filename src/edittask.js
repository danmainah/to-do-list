/* eslint-disable  no-undef, comma-dangle */
export default (e) => {
  const data = localStorage.getItem('tasks');
  const taskArrays = JSON.parse(data);
  const taskObject = taskArrays.find(
    (x) => x.index === Number(e.target.parentNode.id)
  );
  const index = taskArrays.indexOf(taskObject);
  taskArrays[index].description = e.target.textContent;
  localStorage.setItem('tasks', JSON.stringify(taskArrays));
};
/* eslint-enable  no-undef, comma-dangle */