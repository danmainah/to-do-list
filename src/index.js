import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import editTask from './edittask';
import addtodo from './addtask';
import deletetask from './deletetask';

const tasks = [];
const list = document.getElementById('list');
const addtask = document.querySelector('#addtask');

 const display = () => {
const data =localStorage.getItem('tasks');
  if (data) {
    JSON.parse(data).forEach((task) => {
        const li = document.createElement('li');
        const text = 
        `<div class = "row" id='${task.index}'> 
        <input class = 'ticks col-1' type ='checkbox' ${
          task.isCompleted ? 'checked' : '' } /> 
        <div class='description col-10 ${task.isCompleted ? 'checked' : ''}'contenteditable="${!task.completed}"> ${task.description}
        </div>
      <span class="badge bg-danger rounded-pill col-1 deletebutton "><i class="fa fa-trash"></i></span>
      </div>`;
        li.classList.add('list-group-item');
        li.innerHTML = text;
        list.appendChild(li);
      });
  }
 let ticks = document.querySelectorAll('.ticks');
 ticks.forEach(tick =>{
   
    tick.addEventListener('change', (ev) => {
        checkbox(ev);
      });
 });

 const editButtons = document.querySelectorAll('.description');
 editButtons.forEach((btn) => {
   btn.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') {
       editTask(e);
       list.innerHTML = '';
       display();
     }
   });
 });

 let deletebutton = document.querySelectorAll('.deletebutton');
 deletebutton.forEach(tick =>{
    tick.addEventListener('click', (ev) => {
        deletetask(ev);
        list.innerHTML = '';
        display();
      });
 })
};

display();
addtask.addEventListener('keypress', (e) => {
    
    if (e.key === 'Enter' && addtask.value) {
      addtodo(tasks);
      list.innerHTML = '';
      addtask.value = '';
      display();
    }
  
  });
  