// EJERCICIOS BÁSICOS JS - 01


/* 
*************************************

EJERCICIO 01:

Seudo código

1. Iniciar Bucle
2. Imprimir números del 1 al 30
3. Incrementar de 3 en 3

RESULTADO:

for(let i = 1; i <= 30; i += 3){
    console.log(i);
}

***********************************************
*/



/*
***********************************************
EJERCICIO 02:

Seudo Código

1. iniciar bucle for
2. Imprimir título
3. Operación interna

console.log(`Tabla de Multiplicar del 8`);

for(let i = 1; i <= 10; i++){
    console.log(`8 x ${i} = ${i * 8}`);
}

***********************************************
*/


/*
***********************************************
EJERCICIO 03:

Seudo Código

1. Iniciar bucle for
2. Imprimir números
3. Si número es múltiplo de 2 = 0; es par
4. Si número no es múltiplo de 2 = 0; es impar


for(let i = 1; i <= 29; i++){
    if(i % 2 === 0){
        console.log(`El número ${i}, es par`)
    } else {
        console.log(`El número ${i}, es impar`)
    }
}

***********************************************
*/


/*
***********************************************
EJERCICIO 04:

Seudo código

1. Solicitar una frase
2. Iniciar contador
3. Comprobar letra = 'a'.
4. Si  letra es = 'a'; incrementar contador.
5. Imprimir Resultado.


let frase = prompt(`Escribe una frase`);

let contador = 0;

for (letra of frase) {
    if(letra === 'a'){
        contador++
    }
}

console.log(`La frase: ${frase}, tiene ${contador} letras "a"`);

***********************************************
*/


/* 
**********************************************

EJERCICIO 05

1. Imprimir números 1 al 50.
2. Si número es múltiplo de 3, mostrar la palabra "Fizz".
3. Si número es múltiplo de 5, muestra la palabra Buzz.
4. Si número es múltiplo de 3 y de 5, muestra la palabra 'FizzBuzz'.



for(let i = 1; i <= 50; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log(`FizzBuzz`);
    } else if(i % 3 === 0){
        console.log(`Fizz`);
    } else if(i % 5 === 0){
        console.log(`Buzz`);
    } else {
        console.log(i)
    }

    console.log(i);
}

**********************************************
*/


/* 
**********************************************

EJERCICIO 06

1. Crear un bucle for para el primer número de la tabla de multiplicar.
2. Crear un bucle interno para iterar el segundo número de la tabla
3. Monstar el resultado.

for(let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}`)
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
**********************************************
*/



/* 
**********************************************

EJERCICIO 07

Seudo Código

1. Pedir al usuario un número del 1 al 10
2. Si el número no está en el rango, volver a solicitar.
3. Si no es un número válido, volver a hacer la pregunta.


let numero;

do{
    numero = prompt(`Ingresa un número del 1 al 10`);
} while(numero < 1 || numero > 10 || isNaN(numero));

console.log(`El número ingresado: ${numero}, es correcto!`);


**********************************************
*/


/* 
**********************************************

EJERCICIO 08

Seudo código:

1. Solicitar al usuario un número entre el 50 y 100.
2. Validar si el número cumple con los requisitos.
3. Si no cumple, volver a preguntar.


let number;
do{
    number = prompt(`Ingresa un número del 50 a 100 para continuar`);
} while((number < 50 || number > 100) || isNaN(number));

console.log(`El número ingresado ${number}, es correcto`);

**********************************************
*/



/*
**********************************************

EJERCICIO 09

1. Solicitar al usuario un número del 2 al 10
2. Comprobar y repetir pregunta si no es correcto.
3. Crear un bucle for para la tabla de multiplicar de dicho número.

let elNumero;

do{
    elNumero = prompt(`Introduce un número entero entre 2 y 10`);
} while(elNumero < 2 || elNumero > 10 || isNaN(elNumero));

console.log(`El número ${elNumero}, es correcto!`);

**********************************************
*/


/*
**********************************************

EJERCICIO 10:

1. 

**********************************************
*/


/*
**********************************************

EJERCICIO 11:

1. 

**********************************************
*/

let names = [0, 1, 2, 3, 4, 5];

for (let name of names){
    name++;
    console.log(name);
}