//Esta es mi calculadora de Masa Corporal

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function resultadoIMC(imc) {
    if (imc < 18.5) {
        return 'Por debajo del peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso Saludable';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Tenes Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidad I';
    } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidad II';
    } else if (imc >= 40 && imc < 50) {
        return 'Suspende Los Postres';            
    } else {
        return 'Mega Gordo';

    }
}

function mostrarResultado(imc, estado) {
    alert(`Tu Masa Corporal es ${imc.toFixed(2)} y estás en la categoría: ${estado}.`);
}

// Bucle principal para manejar el flujo
let repetir;
do {
    let peso, altura;

    // Bucle para validar el peso
    do {
        // Pedir peso y altura
        peso = parseFloat(prompt('Coloca tu peso en kilogramos:'));
        if (peso === null || altura === null) {
            // Si el usuario presiona Cancelar, salir del bucle principal
            alert('Operación cancelada.');
            break;
        }

        altura = parseFloat(prompt('Coloca tu altura en metros:'));
        if (altura === null) break;


        // Validar entradas
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert('Por favor, presta atención e ingresa valores válidos.');
        } else if (peso > 300) {
            alert('El peso ingresado es mayor a 300 Kgs. Por favor, ingresa un valor válido.');
        } else if (altura > 2.3) {
            alert('La Altura ingresada es mayor a 2.3 Mts. Por favor, ingresa un valor válido.');
        } else {
            break; // Salir del bucle si los datos son válidos
        }
    } while (true);




    // Calcular Masa Muscular
    let imc = calcularIMC(peso, altura);
    let estado = resultadoIMC(imc);

    // Mostrar resultados
    mostrarResultado(imc, estado);

    // Mostrar resultados en la consola
    console.log(`Cálculo de tu masa corporal (IMC):`);
    console.log(`Si Pesas: ${peso} kg`);
    console.log(`y Medis: ${altura} Mts`);
    console.log(`Tu Masa Muscular es de: ${imc.toFixed(2)}`);
    console.log(`Estado: ${estado}`);

    // Preguntar al usuario si desea realizar otro cálculo
    repetir = prompt('¿Deseas calcular otro IMC? (sí/no)').toLowerCase();

} while (repetir === 'sí' || repetir === 's');

if (repetir === 'no' || repetir === 'n') {
    alert('¡Muchas Gracias por utilizar la calculadora de Masa Muscular que hice para mi primer proyecto de Javascript en Coderhouse! ');
}


