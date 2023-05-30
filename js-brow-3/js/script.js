 // Obtener elementos del DOM
 const form = document.querySelector('form');
 const inputName = document.querySelector('input');
 const inputEmail = document.querySelector('#email')
 const section = document.querySelector('section');

 // Manejar el evento de enviar el formulario
 form.addEventListener('submit', (event) => {
   event.preventDefault();
    const name = inputName.value;
    const email = inputEmail.value;
    inputName.value = '';
    inputEmail.value = '';
    saveName(name, email);
 });

 //Función para guardar el nombre en el localStorage
 function saveName(name, email) {
    const data = {
        name: name,
        email: email
    };
    localStorage.setItem('userData', JSON.stringify(data));
    showName();
  };

 // Función para mostrar el nombre guardado en localStorage
 function showName() {
    const storedData = localStorage.getItem("userData");
    section.textContent = '';
    if(storedData){
        const userData = JSON.parse(storedData);
        const nameElement = document.createElement('h2');
        nameElement.textContent = `Nombre: ${userData.name}`;
        section.appendChild(nameElement);
        const emailElement = document.createElement('h2');
        emailElement.textContent = `Email: ${userData.email}`;
        section.appendChild(emailElement);
        createButton();
    }else {
        const messageElement = document.createElement('h2');
        messageElement.textContent = 'No hay datos guardados.';
        section.appendChild(messageElement);
    }
   
   
 }

 function createButton() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    section.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteName);
 }

 // Función para borrar el nombre guardado en localStorage
 function deleteName() {
    localStorage.removeItem('userData');
    showName();
 }

 // Mostrar el nombre guardado al cargar la página
 showName();