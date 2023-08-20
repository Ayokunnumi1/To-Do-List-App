// eslint-disable-next-line import/no-cycle
import { taskArray } from './add-remove.js';

function addToLocalStorage() {
  localStorage.setItem('taskArray', JSON.stringify(taskArray));
}

function getLocalStorage() {
  const getData = localStorage.getItem('taskArray');
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
}

export { addToLocalStorage, getLocalStorage };