const formCrearTarea = document.querySelector(".nueva-tarea");
const inputNuevaTarea = document.getElementById("nuevaTarea");
const tareas = document.querySelector('.tareas');
const tareasPendientes = document.querySelector(".tareas-pendientes");
const tareasTerminadas = document.querySelector(".tareas-terminadas");
const contadorFinalizadas = document.getElementById('cantidad-tareas');
const botonBorrarTareas = document.getElementById('delete-completed');

let listaTareas = [];
let contadorId = 1;


function renderizarTareas() {
  // obtengo listados y limpio cualquier contenido interno
  tareasPendientes.innerHTML = "";
  tareasTerminadas.innerHTML = "";
  // buscamos el numero de tareas finalizadas 
  let contadorTareas = 0;
  contadorFinalizadas.innerText = contadorTareas;
  listaTareas.forEach((tarea) => {
    if (tarea.completed) {
      contadorTareas++;
      //lo mandamos al listado de tareas completadas
      tareasTerminadas.innerHTML += `
        <li class="tarea">
          <div class="hecha">
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="title">
            <p class="nombre ${tarea.completed ? ' is-completed' : ''}">${tarea.title}</p>
            <div class="cambios-estados">
              <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
              <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
            </div>
          </div>
        </li>
      `;
    } else {
        //lo mandamos al listado de tareas sin terminar
        tareasPendientes.innerHTML += `
          <li class="tarea">
            <input type="checkbox" class="change" id="${tarea.id}">
            <label class="title nombre" for="${tarea.id}">${tarea.title}</label>
            <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
          </li>
        `;
    }
    // actualizamos el contador de tareas finalizadas en la pantalla
    contadorFinalizadas.innerText = contadorTareas;

  });
};


function agregarTarea(event) {
  event.preventDefault();
  const value = inputNuevaTarea.value.trim();
  if(value != '') {
    const tarea = {
      id: contadorId,
      title: value,
      completed: false
    };
    listaTareas.push(tarea);
    contadorId++;
    inputNuevaTarea.value = '';
    renderizarTareas();
  }    
};


function cambiarEstadoTarea(id) {
  const tarea = listaTareas.find( tarea => tarea.id === id );
  if(tarea) {
    tarea.completed = !tarea.completed;
    renderizarTareas();
  }
};  
  

function eliminarTarea(id){
  listaTareas = listaTareas.filter(tarea => tarea.id !== id );
  renderizarTareas(); 
};


function handleSubmit(event) {
  event.preventDefault();
  agregarTarea(event);

};


function handleCheckTask(event) {
  const id = parseInt(event.target.id);
  if (event.target.matches(".change")) cambiarEstadoTarea(id);
  else if (event.target.matches(".borrar")) eliminarTarea(id);
};


function handleDelete() {
  listaTareas = listaTareas.filter(tarea => !tarea.completed);
  renderizarTareas();
};


formCrearTarea.addEventListener("submit", handleSubmit);
tareas.addEventListener('click', handleCheckTask);
botonBorrarTareas.addEventListener('click', handleDelete);