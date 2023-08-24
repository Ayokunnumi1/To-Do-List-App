// eslint-disable-next-line import/no-cycle
import { getLocalStorage, addToLocalStorage } from './local-storage.js';

export const form = document.querySelector('.form');
export const userFirstInput = document.querySelector('#user-first-input');
// eslint-disable-next-line import/no-mutable-exports
export let taskArray = getLocalStorage();
// console.log(taskArray);

export function pushToTaskArray() {
  const currentIndex = taskArray.length + 1;
  const userInput = userFirstInput.value;
  if (userInput) {
    const createTask = {
      description: userInput,
      completed: false,
      // eslint-disable-next-line no-plusplus
      index: currentIndex,
    };
    taskArray.push(createTask);
  }
  userFirstInput.value = '';
}

export function editTaskDescription(e) {
  if (e.target.classList.contains('list-user-input')) {
    // this index line converts the string in the p tag to an integer in base 10
    //  to get the index of task 2 be edited
    const index = parseInt(e.target.dataset.text, 10);
    console.log(index);
    taskArray = taskArray.map((task) => {
      // console.log(task.index, index);
      if (task.index === index) {
        task.description = e.target.textContent.trim();
        return task;
      }
      return task;
      // task[index].description = e.target.textContent.trim();
    });
    // console.log(taskArray);
    addToLocalStorage();
    e.target.blur();
    e.target.contentEditable = false;
  }
}

export function removedAndFilterArray(index) {
  taskArray = taskArray.filter((task) => task.index !== index)
    .map((task, id) => {
      task.index = id + 1;
      return task;
    });
}

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

// const checkBoxId = e.target.id;
// console.log(textNewIndex);