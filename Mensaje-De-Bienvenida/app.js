alert('Bienvenido a Nuestro Sitio Web');

let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;


let mensajeDeError = '¡Error! Completa todos los campos';

alert(mensajeDeError);


let nombreUsuario = prompt("Ingresa tu Nombre");

let edadUsuario = prompt("Ingresa tu Edad");
edadUsuario = parseInt(edadUsuario, 10);

if (edadUsuario >= 18) {
    alert("¡Puedes obtener tu licencia de conducción!");
}