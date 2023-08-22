// import { taskArray } from './add-remove.js';

// import { addToLocalStorage } from './local-storage.js';

// import { displayTask } from './markUp.js';

function dbClickTaskDescription(e) {
  if (e.target.classList.contains('list-user-input')) {
    if (!e.target.isContentEditable) {
      e.target.contentEditable = true;
      e.target.focus();
    }
  }
}

export {
  // eslint-disable-next-line import/prefer-default-export
  dbClickTaskDescription,
};
