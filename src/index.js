import './style.css';

const ul = document.getElementById('list');
const tasks = [
  {
    index: 1,
    isCompleted: false,
    description: "do coding challenge",
  },
  {
    index: 2,
    isCompleted: false,
    description: "Read the Bible",
  },
  {
    index: 3,
    isCompleted: false,
    description: "Read emails",
  },
];

function displaylist(){
  tasks.forEach(task =>{
    const li = document.createElement('li')
    const text = `<div> ${task.description}</div>`
    li.innerHTML = text
    ul.appendChild(li)
  })
}

displaylist();