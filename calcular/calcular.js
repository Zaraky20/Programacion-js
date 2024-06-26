// Función para calcular el Índice de Masa Corporal
function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

// Función para calcular el factorial de un número
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFactorial(n - 1);
}

// Función para convertir dólares a reales brasileños (con cotización de R$4,80)
function convertirDolaresAReales(dolares) {
    const cotizacionDolar = 4.80;
    return dolares * cotizacionDolar;
}

// Función que muestra en pantalla el área y el perímetro de una sala rectangular
function calcularAreaPerimetroRectangulo(altura, anchura) {
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log(`Área del rectángulo: ${area}`);
    console.log(`Perímetro del rectángulo: ${perimetro}`);
}

// Función que muestra en pantalla el área y el perímetro de una sala circular (considerando Pi = 3.14)
function calcularAreaPerimetroCirculo(radio) {
    const pi = 3.14;
    const area = pi * radio * radio;
    const perimetro = 2 * pi * radio;
    console.log(`Área del círculo: ${area}`);
    console.log(`Perímetro del círculo: ${perimetro}`);
}

// Función que muestra en pantalla la tabla de multiplicar de un número dado
function mostrarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Ejemplos de uso
console.log(`IMC: ${calcularIMC(1.75, 70)}`); // Calcula el IMC para una altura de 1.75 metros y un peso de 70 kg
console.log(`Factorial: ${calcularFactorial(5)}`); // Calcula el factorial de 5
console.log(`Valor en reales: ${convertirDolaresAReales(100)}`); // Convierte 100 dólares a reales brasileños
calcularAreaPerimetroRectangulo(5, 10); // Muestra el área y perímetro de un rectángulo de 5x10 metros
calcularAreaPerimetroCirculo(7); // Muestra el área y perímetro de un círculo con radio 7 metros
mostrarTablaMultiplicar(8); // Muestra la tabla de multiplicar del número 8// Función para calcular el Índice de Masa Corporal (IMC)
function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

// Función para calcular el factorial de un número
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFactorial(n - 1);
}

// Función para convertir dólares a reales brasileños (con cotización de R$4,80)
function convertirDolaresAReales(dolares) {
    const cotizacionDolar = 4.80;
    return dolares * cotizacionDolar;
}

// Función que muestra en pantalla el área y el perímetro de una sala rectangular
function calcularAreaPerimetroRectangulo(altura, anchura) {
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log(`Área del rectángulo: ${area}`);
    console.log(`Perímetro del rectángulo: ${perimetro}`);
}

// Función que muestra en pantalla el área y el perímetro de una sala circular (considerando Pi = 3.14)
function calcularAreaPerimetroCirculo(radio) {
    const pi = 3.14;
    const area = pi * radio * radio;
    const perimetro = 2 * pi * radio;
    console.log(`Área del círculo: ${area}`);
    console.log(`Perímetro del círculo: ${perimetro}`);
}

// Función que muestra en pantalla la tabla de multiplicar de un número dado
function mostrarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}