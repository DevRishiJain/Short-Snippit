const todoList = document.querySelector('.todo-list');
const workingList = document.querySelector('.working-list');
const doneList = document.querySelector('.done-list');

const todoInput = document.getElementById('todo-input');
const workingInput = document.getElementById('working-input');
const doneInput = document.getElementById('done-input');

const todoAddBtn = document.getElementById('todo-add-btn');
const workingAddBtn = document.getElementById('working-add-btn');
const doneAddBtn = document.getElementById('done-add-btn');

let draggedItem = null;

// Add event listeners for adding new cards
todoAddBtn.addEventListener('click', addCard.bind(null, todoList, todoInput));
workingAddBtn.addEventListener('click', addCard.bind(null, workingList, workingInput));
doneAddBtn.addEventListener('click', addCard.bind(null, doneList, doneInput));

// Add event listeners for drag and drop
todoList.addEventListener('dragstart', dragStart);
workingList.addEventListener('dragstart', dragStart);
doneList.addEventListener('dragstart', dragStart);

todoList.addEventListener('dragover', dragOver);
workingList.addEventListener('dragover', dragOver);
doneList.addEventListener('dragover', dragOver);

todoList.addEventListener('drop', drop);
workingList.addEventListener('drop', drop);
doneList.addEventListener('drop', drop);

// Function to add a new card
function addCard(list, input) {
  const taskText = input.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.draggable = true;
    li.addEventListener('dragstart', dragStart);
    list.appendChild(li);
    input.value = '';
  }
}

// Function to handle drag start
function dragStart(e) {
  draggedItem = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', null);
}

// Function to handle drag over
function dragOver(e) {
  e.preventDefault();
}

// Function to handle drop
function drop(e) {
  e.preventDefault();
  const targetList = e.currentTarget;
  if (targetList !== draggedItem.parentNode) {
    targetList.appendChild(draggedItem);
  }
}