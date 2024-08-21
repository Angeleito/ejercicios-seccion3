document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.className = 'flex justify-between items-center py-2';
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded delete-btn">Eliminar</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';

    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
    });
});
