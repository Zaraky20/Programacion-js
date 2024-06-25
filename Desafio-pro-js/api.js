// Muestra un mensaje de bienvenida
console.log("¡Bienvenido/a!");

// Muestra un mensaje de bienvenida con el nombre
let nombre = "Miguel";
console.log("¡Hola, " + nombre + "!");

// Muestra un mensaje de bienvenida con el nombre usando alert
nombre = "Miguel";
alert("¡Hola, " + nombre + "!");

// Pregunta al usuario su lenguaje de programación favorito y muestra la respuesta
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("Tu lenguaje de programación favorito es: " + lenguajeFavorito);

// Realiza la suma de dos valores y muestra el resultado
let valor1 = 5;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log("La suma de " + valor1 + " y " + valor2 + " es igual a " + resultado + ".");

// Realiza la resta de dos valores y muestra el resultado
valor1 = 10;
valor2 = 4;
resultado = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + " es igual a " + resultado + ".");

// Verifica si la persona es mayor o menor de edad según la edad ingresada
let edad = prompt("Por favor, ingresa tu edad:");
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Verifica si un número ingresado es positivo, negativo o cero
let numero = prompt("Por favor, ingresa un número:");
numero = Number(numero); // Convierte el valor ingresado a un número
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// Utiliza un bucle while para mostrar los números del 1 al 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Verifica si una nota es aprobada o reprobada
let nota = 7;
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// Genera y muestra un número aleatorio
let numeroAleatorio = Math.random();
console.log("Número aleatorio: " + numeroAleatorio);

// Genera y muestra un número entero aleatorio entre 1 y 10
let numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatorio entre 1 y 10: " + numeroAleatorioEntre1y10);

// Genera y muestra un número entero aleatorio entre 1 y 1000
let numeroAleatorioEntre1y1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatorio entre 1 y 1000: " + numeroAleatorioEntre1y1000);