// Solicita al usuario que ingrese su nombre y lo almacena en la variable 'nombre'
let nombre = prompt('Digite su nombre:');
// Asigna el valor de 'nombre' a 'nombreUsuario'
let nombreUsuario = nombre;

// Verifica si 'nombreUsuario' es igual a 'nombre' y muestra un mensaje de bienvenida
if (nombreUsuario === nombre) {
    alert('Bienvenido ' + nombre);
}

// Solicita al usuario que ingrese un día de la semana y lo almacena en la variable 'diaDeSemana'
let diaDeSemana = prompt('Ingrese un día de la semana');

// Verifica si el día ingresado es "sábado" o "domingo" y muestra el mensaje correspondiente
if (diaDeSemana.toLowerCase() === 'sábado' || diaDeSemana.toLowerCase() === 'domingo') {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// Solicita al usuario que ingrese un número y lo almacena en la variable 'numeroUs'
let numeroUs = prompt('Digite un número: ');

// Verifica si el número ingresado es positivo o negativo y muestra el mensaje correspondiente
if (numeroUs >= 0) {
    alert("El número es positivo");
} else {
    alert("El número es negativo");
}

// Solicita al usuario que ingrese su puntuación y la almacena en la variable 'puntuacion'
let puntuacion = prompt('Ingrese su puntuación:');

// Verifica si la puntuación es mayor o igual a 100 y muestra el mensaje correspondiente
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Inténtalo nuevamente para ganar.");
}

// Solicita al usuario que ingrese el saldo de su cuenta y lo almacena en la variable 'saldo'
let saldo = prompt('Ingrese el saldo de su cuenta:');
// Muestra el saldo actual utilizando un template string para incluir el valor de 'saldo'
alert(`Su saldo actual es de $${saldo}.`);