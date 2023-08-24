// import { taskArray } from './add-remove.js';
import { addToLocalStorage, getLocalStorage } from './local-storage.js';

let taskArray = getLocalStorage();
const dbClickTaskDescription = (e) => {
  if (e.target.classList.contains('list-user-input')) {
    if (!e.target.isContentEditable) {
      e.target.contentEditable = true;
      e.target.focus();
    }
  }
};

const editTaskDescription = (e) => {
  if (e.target.classList.contains('list-user-input')) {
    // this index line converts the string in the p tag to an integer in base 10
    //  to get the index of task 2 be edited
    const index = parseInt(e.target.dataset.text, 10);
    // console.log(index);
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
};

export {
  // eslint-disable-next-line import/prefer-default-export
  editTaskDescription,
  dbClickTaskDescription,
};
