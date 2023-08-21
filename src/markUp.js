import { taskArray } from './add-remove.js';

const listItemsContainer = document.querySelector('.list-items-container');
function displayTask() {
  listItemsContainer.innerHTML = '';
  const createTaskMarkUp = taskArray.map((task) => {
    const li = `<li class="list-items-content">
                    <div class="checkBox-text-input">
                        <input type="checkbox" name="checkbox" id="${task.index}">
                        <p class="list-user-input">${task.description}</p>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical" data-option="${task.index}"></i>
                </li>`;
    return li;
  }).join('');
  listItemsContainer.insertAdjacentHTML('beforeend', createTaskMarkUp);
}

// eslint-disable-next-line import/prefer-default-export
export { displayTask };
