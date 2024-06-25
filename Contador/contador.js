/*Escribir en la terminal node contador.js
para correr el programa
*/
const readline = require('readline');

// Contador que comienza en 1 y va hasta 10 usando un bucle 'while'
let contador1 = 1;
console.log("Contador de 1 a 10:");
while (contador1 <= 10) {
    console.log(contador1);
    contador1++;
}

// Contador que comienza en 10 y va hasta 0 usando un bucle 'while'
let contador2 = 10;
console.log("Contador de 10 a 0:");
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

// Programa de cuenta progresiva que pide un número y cuenta desde 0 hasta ese número
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce un número para contar desde 0 hasta ese número: ", function(input) {
    let numero = parseInt(input);
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
    } else {
        let contador3 = 0;
        console.log(`Contando desde 0 hasta ${numero}:`);
        while (contador3 <= numero) {
            console.log(contador3);
            contador3++;
        }
    }
    rl.close();
});