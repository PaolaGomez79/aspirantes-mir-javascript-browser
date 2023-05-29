const input = document.querySelector('#texto');
const resultado = document.getElementById('resultado');
const boton = document.querySelector('.btn');
const resultadoMayusculas = document.getElementById('resultadoMayusculas');

input.addEventListener('input', function() {
    const texto = input.value.toUpperCase();
    resultado.textContent = texto;
});

boton.addEventListener('click', function() {
    const texto = input.value.toUpperCase();
    resultadoMayusculas.textContent = texto;
});