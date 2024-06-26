// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguajesDeProgramacion" con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega a la lista "lenguajesDeProgramacion" los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion".
function mostrarLenguajes() {
    console.log('Lista de lenguajes de programación:');
    lenguajesDeProgramacion.forEach((lenguaje, index) => {
        console.log(`${index + 1}. ${lenguaje}`);
    });
}

// Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion" en orden inverso.
function mostrarLenguajesInverso() {
    console.log('Lista de lenguajes de programación en orden inverso:');
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(`${i + 1}. ${lenguajesDeProgramacion[i]}`);
    }
}

// Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista) {
    const suma = lista.reduce((acc, num) => acc + num, 0);
    return suma / lista.length;
}

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMayorYMenor(lista) {
    const mayor = Math.max(...lista);
    const menor = Math.min(...lista);
    console.log(`El número más grande es: ${mayor}`);
    console.log(`El número más pequeño es: ${menor}`);
}

// Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElementos(lista) {
    return lista.reduce((acc, num) => acc + num, 0);
}

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error('Las listas deben tener el mismo tamaño');
    }
    return lista1.map((num, index) => num + lista2[index]);
}

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoDeElementos(lista) {
    return lista.map(num => num * num);
}

// Ejemplos de uso
mostrarLenguajes();
mostrarLenguajesInverso();

const numeros = [2, 4, 6, 8, 10];
console.log(`Promedio: ${calcularPromedio(numeros)}`);
mostrarMayorYMenor(numeros);
console.log(`Suma de elementos: ${sumarElementos(numeros)}`);
console.log(`Posición del elemento 6: ${buscarElemento(numeros, 6)}`);
console.log(`Posición del elemento 11: ${buscarElemento(numeros, 11)}`);

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
console.log(`Suma de listas: ${sumarListas(lista1, lista2)}`);

console.log(`Cuadrado de elementos: ${cuadradoDeElementos(numeros)}`);