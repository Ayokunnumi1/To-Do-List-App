import './style.css';
import {
  pushToTaskArray, form,
} from './add-remove.js';
import { addToLocalStorage } from './local-storage.js';
import { displayTask } from './markUp.js';

// const dustBin = document.querySelectorAll('.fa-trash-can');
// console.log(dustBin);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  pushToTaskArray();
  addToLocalStorage();
  displayTask();
});

window.addEventListener('DOMContentLoaded', displayTask);
