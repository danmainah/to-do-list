/* eslint-disable comma-dangle, import/prefer-default-export, no-undef */
import './style.css';
import getTasks from './display.js';

const list = document.querySelector('ul');

export  const checkbox = () => {
  list.addEventListener(
    'click',
     (ev) => {
      if (ev.target.tagName === 'LI') {
        const task = ev.target.classList.toggle('checked');
        task.isCompleted = true;
        localStorage.setItem('task', JSON.stringify(getTasks));
      }
    },
    false
  );
};
/* eslint-enable comma-dangle, import/prefer-default-export, no-undef  */