// Obtener elementos del DOM
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const calendarContainer = document.getElementById('calendarContainer');
const createEventBtn = document.getElementById('createEventBtn');

// Función para agregar tarea
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

// Función para agregar nota
function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText !== '') {
    const note = document.createElement('div');
    note.textContent = noteText;
    document.getElementById('notes').appendChild(note);
    noteInput.value = '';
  }
}

// Función para crear evento en el calendario
function createEvent() {
  // Aquí podrías implementar la lógica para crear eventos en el calendario
  alert('Crear evento en el calendario');
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
addNoteBtn.addEventListener('click', addNote);
createEventBtn.addEventListener('click', createEvent);
