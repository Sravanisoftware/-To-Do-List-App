const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent toggling complete when deleting
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
