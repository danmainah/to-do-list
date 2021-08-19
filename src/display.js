const ul = document.getElementById('list');
export const tasks = [
  {
    index: 1,
    isCompleted: false,
    description: 'do coding challenge',
  },
  {
    index: 2,
    isCompleted: false,
    description: 'Read the Bible',
  },
  {
    index: 3,
    isCompleted: false,
    description: 'Read emails',
  },
];

if (localStorage.length === 0) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
const getTasks = JSON.parse(localStorage.getItem('tasks'));

export const displaylist = () => {
  getTasks.forEach((task) => {
    const li = document.createElement('li');
    const text = `<div id='${task.index}'> <input type ='checkbox' ${
      task.isCompleted ? 'checked' : ''
    }> 
    <span class='${task.isCompleted ? 'checked' : ''}'>${task.description}
    </span></div>`;
    li.classList.add('list-group-item');
    li.innerHTML = text;
    ul.appendChild(li);
  });
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Clear all Completed';
  deleteButton.classList.add('list-group-item');
  deleteButton.classList.add('block');
  ul.appendChild(deleteButton);
};
