let titulo = document.querySelector('h1');
titulo.innerHTML = 'Es hora del Desafio';


function clickConsole() {
    console.log('El botón fue clicado')
}

function clickPrompt() {
    let ciudadDeBrasil = prompt('Ingresa el nombre de una ciudad de Brasil');
    alert(`Estuve en ${ciudadDeBrasil} y  me acordé de ti`);
}

function clickAlert() {
    alert('Yo amo JS');
}

function clickSuma() {
    let num1 = parseInt(prompt('Ingresa un número'));
    let num2 = parseInt(prompt('Ingresa otro número'));
    let suma = num1 + num2;
    alert(`La suma de ${num1} y ${num2} es ${suma}`);
}