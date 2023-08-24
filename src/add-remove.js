// eslint-disable-next-line import/no-cycle
import { getLocalStorage } from './local-storage.js';

// eslint-disable-next-line import/no-mutable-exports
export let taskArray = getLocalStorage();

export const pushToTaskArray = (description) => {
  const index = taskArray.length + 1;
  const createTask = {
    description,
    completed: false,
    index,
  };
  taskArray.push(createTask);
};

export const removedAndFilterArray = (index) => {
  taskArray = taskArray.filter((task) => task.index !== index)
    .map((task, id) => {
      task.index = id + 1;
      return task;
    });
};

export function lineThroughText(e) {
  const listUserInput = document.querySelector('.list-user-input');
  if (e.target.classList.contains('list-user-input')) {
    const textNewIndex = parseInt(e.target.dataset.text, 10);
    taskArray.forEach((task) => {
      if (task.index === textNewIndex) {
        // console.log(textNewIndex);
        listUserInput.style.textDecoration = 'line-through';
      }
    });
  }
}
