// Función que muestra Hola, mundo
function saludarMundo() {
    console.log("Hola, mundo");
}

// Función que recibe un nombre como parámetro y muestra "Hola, [nombre]"
function saludar(nombre) {
    console.log("Hola, " + nombre + "");
}

// Función que recibe un número como parámetro y devuelve el doble de ese número
function doblarNumero(numero) {
    return numero * 2;
}

// Función que recibe tres números como parámetros y devuelve su promedio
function promedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

// Función que recibe dos números como parámetros y devuelve el mayor de ellos
function mayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

// Función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo
function cuadrado(numero) {
    return numero * numero;
}

// Llamadas a las funciones para demostrar su funcionamiento
saludarMundo(); // Muestra "Hola, mundo"

saludar("Juan"); // Muestra "Hola, Juan"

let resultadoDoble = doblarNumero(5);
console.log(resultadoDoble); // Muestra 10

let promedioResultado = promedio(4, 6, 8);
console.log(promedioResultado); // Muestra 6

let mayorResultado = mayor(7, 3);
console.log(mayorResultado); // Muestra 7

let cuadradoResultado = cuadrado(4);
console.log(cuadradoResultado); // Muestra 16