// eslint-disable-next-line import/no-cycle
import { getLocalStorage } from './local-storage.js';

export const form = document.querySelector('.form');
export const userFirstInput = document.querySelector('#user-first-input');
export const taskArray = getLocalStorage();
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
