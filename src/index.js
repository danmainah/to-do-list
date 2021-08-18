import './style.css';

const ul = document.getElementById('list');
const tasks = [
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

function displaylist() {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    const text = `<div> <input class='form-check-input me-1' type='checkbox' value='' aria-label='...'>
    ${task.description}</div>`;
    li.classList.add('list-group-item');
    li.innerHTML = text;
    ul.appendChild(li);
  })
  const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Clear all Completed';
    deleteButton.classList.add('list-group-item');
    deleteButton.classList.add('block');
    ul.appendChild(deleteButton);
}

displaylist();