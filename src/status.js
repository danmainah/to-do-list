import './style.css';
import getTasks from './display.js';

const list = document.querySelector('ul');

export const checkbox = () => {
  list.addEventListener(
    'click',
    (checker = (ev) => {
      if (ev.target.tagName === 'LI') {
        const task = ev.target.classList.toggle('checked');
        task.isCompleted = true;
        localStorage.setItem('task', JSON.stringify(getTasks));
      }
    }),
    false
  );
};
