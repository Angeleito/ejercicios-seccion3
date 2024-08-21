document.getElementById('Lista').addEventListener('submit', function(e) {
    e.preventDefault();
    let InputTarea = document.getElementById('agg-tarea');
    let listaTarea = document.getElementById('miLista');

    let li = document.createElement('li');
    li.innerHTML = `
        <span>${InputTarea.value}</span>
        <button class="delete-btn">Eliminar</button>
    `;

    listaTarea.appendChild(li);
    InputTarea.value = '';

    li.querySelector('.delete-btn').addEventListener('click', () => {
        listaTarea.removeChild(li);
    });
});