const input = document.querySelector('#texto');
const resultado = document.getElementById('resultado');
const boton = document.querySelector('.btn');

boton.addEventListener('click', function() {
    const texto = input.value.toLowerCase();
    const textoSinEspacios = texto.replace(/\s/g, '');
    const reverso = textoSinEspacios.split('').reverse().join('');
    if (textoSinEspacios === reverso)  resultado.textContent = `"${texto}" es un palíndromo.` 
    else resultado.textContent = `"${texto}"  no es un palíndromo.`;
    
})