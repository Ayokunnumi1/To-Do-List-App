import './style.css';
import { pushToTaskArray, form } from './add-remove.js';
import { addToLocalStorage, getLocalStorage } from './local-storage.js';

form.addEventListener('submit', () => {
  pushToTaskArray();
  addToLocalStorage();
  getLocalStorage();
});
