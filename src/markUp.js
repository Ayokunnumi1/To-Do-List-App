import {
  pushToTaskArray, taskArray, removedAndFilterArray, changeCompleted,
  dbClickTaskDescription, editTaskDescription,
} from './add-remove.js';
import { addToLocalStorage } from './local-storage.js';

const listItemsContainer = document.querySelector('.list-items-container');
const form = document.querySelector('.form');
function displayTask() {
  listItemsContainer.innerHTML = '';
  const createTaskMarkUp = taskArray.map((task) => {
    const li = `<li class="list-items-content">
                    <div class="checkBox-text-input">
                        <input type="checkbox" name="checkbox" class="checkbox" id="${task.index}">
                        <p class="list-user-input" data-text="${task.index}">${task.description}</p>
                    </div>
                    <i class="fa-solid fa-trash-can" data-trash="${task.index}" ></i>
                </li>`;
    return li;
  }).join('');
  listItemsContainer.insertAdjacentHTML('beforeend', createTaskMarkUp);

  const dustBin = document.querySelectorAll('.fa-trash-can');
  dustBin.forEach((bin) => {
    bin.addEventListener('click', (e) => {
      const index = e.target.dataset.trash;
      removedAndFilterArray(+index);
      addToLocalStorage();
      displayTask();
    });
  });

  const editTextParagraph = document.querySelectorAll('.list-user-input');
  editTextParagraph.forEach((edit) => {
    edit.addEventListener('dblclick', dbClickTaskDescription);
  });

  editTextParagraph.forEach((edit) => {
    edit.addEventListener('focusout', editTaskDescription);
  });

  const checkBox = document.querySelectorAll('.checkbox');
  checkBox.forEach((box) => {
    box.addEventListener('click', (e) => {
      const listUserInput = document.querySelectorAll('.list-user-input');
      const checkbox = e.target;
      const taskId = checkbox.id;
      if (checkbox.checked) {
        listUserInput.style.textDecoration = 'line-through';
        changeCompleted(taskId);
      } else listUserInput.style.textDecoration = 'none';
    });
  });
}

form.addEventListener('submit', (e) => {
  const userFirstInput = document.querySelector('#user-first-input');
  const userInput = userFirstInput.value;
  e.preventDefault();
  if (userInput) {
    pushToTaskArray(userInput);
    displayTask();
    addToLocalStorage();
  }
  userFirstInput.value = '';
});

// eslint-disable-next-line import/prefer-default-export
export { displayTask };
