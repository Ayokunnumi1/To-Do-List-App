// eslint-disable-next-line import/no-cycle
import { getLocalStorage, addToLocalStorage } from './local-storage.js';

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

// import { taskArray } from './add-remove.js';

export const dbClickTaskDescription = (e) => {
  if (e.target.classList.contains('list-user-input')) {
    if (!e.target.isContentEditable) {
      e.target.contentEditable = true;
      e.target.focus();
    }
  }
};

export const editTaskDescription = (e) => {
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

// export function lineThroughText(e) {
//   const listUserInput = document.querySelector('.list-user-input');
//   if (e.target.classList.contains('list-user-input')) {
//     const textNewIndex = parseInt(e.target.dataset.text, 10);
//     taskArray.forEach((task) => {
//       if (task.index === textNewIndex) {
//         // console.log(textNewIndex);
//         listUserInput.style.textDecoration = 'line-through';
//       }
//     });
//   }
// }
export const changeCompleted = (index) => {
  taskArray = taskArray.map((task) => {
    if (task.index === index) {
      task.completed = !task.completed;
    }
    return task;
  });
};

export const clearAlCompleted = () => {
  taskArray = taskArray.filter((task) => !task.completed);
};

// const { id } = e.target;
// const { index } = taskArray;
// if (id === index) {
//   taskArray.forEach((task) => {
//     task.completed = true;
//   });
// }